import Navbar from '../components/navigations/Navbar';
import NavbarContainer from '../components/navigations/NavbarContainer';
import Footer from '../components/sections/footer/Footer';

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
      <Footer />
    </div>
  );
}
