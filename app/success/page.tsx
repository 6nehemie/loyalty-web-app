import { redirect } from 'next/navigation';
import prisma from '../utils/prisma';
import stripe from '../utils/stripe';

const page = async () => {
  const order = await prisma.reservation.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      paymentStatus: 'Processing',
    },
  });

  const session = await stripe.checkout.sessions.retrieve(
    order?.checkoutSessionId as string
  );

  if (session.payment_status === 'paid') {
    await prisma.reservation.update({
      where: {
        id: order?.id,
      },
      data: {
        paymentStatus: 'Completed',
      },
    });
  }

  // redirect(`/account/order-history/${order?.id}`);
  redirect(`/account/order-history`);
};
export default page;
