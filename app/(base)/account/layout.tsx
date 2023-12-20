import { AccountSideBar } from '@/app/components';

export default function AccountLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 p-sides">
      <div className="flex gap-6 max-w-wide w-full mx-auto">
        <div className="w-max">
          <AccountSideBar />
        </div>
        {children}
      </div>
    </section>
  );
}
