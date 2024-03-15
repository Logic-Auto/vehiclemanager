import { getServerSession } from "next-auth";
import { getUserById } from "@/lib/prisma/users";
import Stripe from "stripe";

// shadcn components
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import PlanButton from "./PlanButton";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const fetchPlans = async () => {
  const products = await stripe.products.list({ active: true });
  const prices = await stripe.prices.list({ active: true });

  // Combine product and price data
  const plans = products.data.map((product) => {
    const productPrices = prices.data.filter((price) => price.product === product.id);
    return {
      ...product,
      prices: productPrices,
    };
  });

  return plans;
};

export const Plans = async () => {
  const session = await getServerSession(authOptions);

  let user = null;
  if (session?.user?.id) {
    user = await getUserById(session.user.id);
  }

  const products = await stripe.products.list();
  const prices = await stripe.prices.list();

  const productsWithPrices = products.data.map((product) => {
    const productPrice = prices.data.find((price) => price.product === product.id);
    return {
      ...product,
      price: productPrice.unit_amount,
      priceFormatted: (productPrice.unit_amount / 100).toFixed(2),
      currency: productPrice.currency,
    };
  });

  const userSubscriptions = user && user.user ? user.user.subscriptions : null;

  return (
    <>
      <div className="flex flex-col items-start justify-center max-w-4xl gap-6 mx-auto md:flex-row md:gap-12">
        {productsWithPrices.map((product) => {
          return (
            <Card
              className="flex-1 w-full"
              key={product.id}
              data-productid={product.id}
            >
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="text-2xl font-bold">
                  {product.currency.toUpperCase()} {product.priceFormatted}
                </div>
                <ul className="space-y-2 list-disc list-inside">
                 
                </ul>
                {userSubscriptions ? (
                  <Button>Manage Subscription</Button>
                ) : (
                  <PlanButton plan={product} subscription={null} />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Plans;
