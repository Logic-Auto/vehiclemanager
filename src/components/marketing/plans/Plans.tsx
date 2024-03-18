import { getServerSession } from "next-auth";
import { getUserById } from "@/lib/prisma/users";
import Stripe from "stripe";

// shadcn components
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import PlanButton from "./PlanButton";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


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
    
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<stripe-pricing-table pricing-table-id="prctbl_1OvjCEJoLn2MYD53Wxa5vsee"
publishable-key="pk_live_51MmR3NJoLn2MYD53gpYLKJRKzcAOdHD14StIoA7LzDWpOnIEraNjFVfzVy9IYxA1aQnDL8auw754SLjLY650X7D500S4ES47Qi">
</stripe-pricing-table>
    </>
  );
};

export default Plans;
