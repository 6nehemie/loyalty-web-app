import { AccountSideBar } from '@/app/components';
import SectionWrapper from '@/app/components/wrappers/SectionWrapper';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Mon compte Loyalty RC',
};

export default async function AccountLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  // Redirect to sign in if not logged in
  const session = await getServerSession();
  if (!session) redirect('/sign-in');

  return (
    <SectionWrapper>
      <div className="h-full w-full flex flex-col py-[120px]">
        <div className="flex flex-col lg:flex-row max-w-[1440px] w-full mx-auto gap-6">
          <div className="w-full md:w-[300px] flex-shrink-0">
            <AccountSideBar />
          </div>

          <div className=" lg:space-x-5 w-full">
            <div className="max-md:hidden flex-grow bg-white border-gray-300 md:block hidden">
              {/* This is the separator; hidden on mobile */}
              <div className="border-l border-gray-300 h-full"></div>
            </div>

            <div className="flex-grow bg-white">{children}</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
