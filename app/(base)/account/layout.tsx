import { AccountSideBar } from '@/app/components';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AccountLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  // Redirect to sign in if not logged in
  const session = await getServerSession();
  if (!session) redirect('/sign-in');
  return (
    <section className="mt-16 p-sides h-full">
      <div className="flex gap-6 max-w-wide w-full h-full mx-auto">
        <div className="w-max">
          <AccountSideBar />
        </div>
        {children}
      </div>
    </section>
  );
}
