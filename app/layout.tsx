import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import './globals.css';

import { getServerSession } from 'next-auth';
import SessionProvider from '@/app/providers/SessionProvider';

const inter = Exo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Loyalty RC | Location automobile sportive.',
  description:
    "Découvrez l'expérience ultime de conduite avec Loyalty RC. Louez des voitures sportives de qualité exceptionnelle pour des moments inoubliables.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <SessionProvider session={session}>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
