import Navbar from '../components/navigations/Navbar';

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
}
