import { FleetNav } from '@/app/components';
import React from 'react';

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <FleetNav />
      <div className="">{children}</div>
    </div>
  );
}
