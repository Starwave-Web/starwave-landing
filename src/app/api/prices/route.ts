import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET() {
  try {
    const prices = await stripe.prices.list();

    return new Response(JSON.stringify(prices), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching prices:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch prices" }), {
      status: 500,
    });
  }
}
