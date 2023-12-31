import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/app/utils/adminUtils';
import { AdminUserInfo, Sidebar } from '@/app/components';

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (!session || !session.user) redirect('/');
  await isAdmin(session.user.email!);

  return (
    <div className="flex bg-zinc-900 min-h-screen font-montserrat text-white">
      <Sidebar />
      <section className="px-10 py-8 font-light w-full">
        <AdminUserInfo />
        {children}
      </section>
    </div>
  );
}
