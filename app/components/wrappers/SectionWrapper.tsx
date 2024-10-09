import prisma from '@/app/utils/prisma';
import { cn } from '@/utils';
import { Roboto } from 'next/font/google';

// Import the Roboto font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

interface SectionWrapperProps {
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = async ({ children }) => {
  return (
    <section
      className={cn(
        'max-w-[1440px] w-full mx-auto flex flex-col gap-12 p-sides-2',
        {
          [`${roboto.className}`]: true,
        }
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
