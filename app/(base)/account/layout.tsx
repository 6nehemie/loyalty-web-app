import { AccountSideBar } from '@/app/components';

export default function AccountLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 p-sides">
      <div className="flex gap-6 max-w-wide w-full mx-auto">
        {/* Include shared UI here e.g. a header or sidebar */}

        <AccountSideBar />

        {children}
      </div>
    </section>
  );
}
