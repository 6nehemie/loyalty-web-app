import Navbar from '../components/navigations/Navbar';

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <main>Footer</main>
    </div>
  );
}
