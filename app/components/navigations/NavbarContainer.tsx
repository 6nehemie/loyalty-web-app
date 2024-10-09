import prisma from '@/app/utils/prisma';
import { NavbarV2 } from '..';

const NavbarContainer = async () => {
  // const collection = await prisma.vehicule.findMany();
  const collection: any[] = [];

  return (
    <div className="">
      <NavbarV2 collection={collection} />
    </div>
  );
};
export default NavbarContainer;
