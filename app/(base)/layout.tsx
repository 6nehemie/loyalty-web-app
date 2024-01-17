import Navbar from '../components/navigations/Navbar';
import NavbarContainer from '../components/navigations/NavbarContainer';

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      {/* <Navbar /> */}
      <NavbarContainer />
      <main className="">{children}</main>
    </div>
  );
}
