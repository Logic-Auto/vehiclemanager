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

  const prices = await stripe.prices.list({ active: true });
  const plans = await Promise.all(prices.data.map(async (price) => {
    const product = await stripe.products.retrieve(price.product);
    const features = product.metadata && product.metadata.features ? product.metadata.features.split(",").map(feature => feature.trim()) : [];
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: price.unit_amount,
      priceFormatted: (price.unit_amount / 100).toFixed(2),
      currency: price.currency,
      features: features,
    };
  }));

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
