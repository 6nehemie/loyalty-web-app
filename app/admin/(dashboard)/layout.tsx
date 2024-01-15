import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/app/utils/adminUtils';
import { AdminNavbar, Sidebar } from '@/app/components';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (!session || !session.user) redirect('/');
  await isAdmin(session.user.email!);

  return (
    <div className="bg-neutral-900 w-screen min-h-screen text-white font-montserrat">
      <AdminNavbar />

      <div className="flex justify-center ">
        <Sidebar />

        <section className="bg-zinc-900 max-w-wide px-10 py-8 font-light w-full overflow-hidden">
          {children}
        </section>
      </div>
    </div>
  );
}
