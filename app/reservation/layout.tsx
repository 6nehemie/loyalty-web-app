import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { getStripeProducts } from '../actions/getStripeProducts';

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (!session || !session.user) redirect('/sign-in');

  const products = await getStripeProducts();
  // console.log(products);

  return (
    <div className="bg-zinc-900 min-h-screen px-10 py-8 font-exo text-white">
      <section className="font-light w-full max-w-large mx-auto">
        {children}
      </section>
    </div>
  );
}
