import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import prisma from '../utils/prisma';

export default async function DashboardLayout({
  params,
  children, // will be a page or nested layout
}: {
  params: { reservationId: string };
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (!session || !session.user) redirect('/sign-in');
  // if (!params.reservationId) redirect('/reservation');

  // const newReservation = await prisma

  // console.log(products);

  return (
    <div className="bg-zinc-900 min-h-screen px-10 py-8 font-exo text-white">
      <section className="font-light w-full max-w-large mx-auto">
        {children}
      </section>
    </div>
  );
}
