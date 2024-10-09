import prisma from '@/app/utils/prisma';
import { NavbarV2 } from '..';
import Navbar from './Navbar';
import NavbarV3 from './NavbarV3';

const NavbarContainer = async () => {
  // const collection = await prisma.vehicule.findMany();
  const collection: any[] = [];

  return (
    <div className="">
      {/* <NavbarV2 collection={collection} /> */}

      {/* <Navbar /> */}
      <NavbarV3 />
    </div>
  );
};
export default NavbarContainer;
