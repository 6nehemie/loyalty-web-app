import stripe from '@/app/utils/stripe';
import { NextResponse } from 'next/server';

export async function POST(request: Request, response: Response) {
  const body = request.json();

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
      line_items: [],
      mode: 'payment',
    });
    return new NextResponse(JSON.stringify({ session }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error }), { status: 500 });
  }
}
