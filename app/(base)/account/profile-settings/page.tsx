import {
  Address,
  DeleteAccount,
  Email,
  Name,
  Password,
  PhoneNumber,
} from '@/app/components';
import prisma from '@/app/utils/prisma';
import { getServerSession } from 'next-auth';

const ProfilePage = async () => {
  const session = await getServerSession();
  const userEmail = session!.user!.email as string;

  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    select: {
      civility: true,
      firstName: true,
      lastName: true,
      phoneNumber: true,
      email: true,
      addressLine1: true,
      addressLine2: true,
      postalCode: true,
      city: true,
      country: true,
    },
  });

  return (
    <div className="w-full">
      <h1 className="dashboard-heading">Mon Profil Loyalty</h1>
      {/* PROFILE SETTINGS */}
      <div className="account-grid w-full mb-16">
        <Name firstName={user!.firstName} lastName={user!.lastName} />
        <Address
          addressLine1={user?.addressLine1}
          addressLine2={user?.addressLine2}
          postalCode={user?.postalCode}
          city={user?.city}
          country={user?.country}
        />
        <PhoneNumber number={user?.phoneNumber} />
      </div>
      {/* SECURITY SETTINGS */}
      <h3 className="heading-4">Sécurité</h3>

      <div className="account-grid w-full mb-16">
        <Email email={user!.email} />
        <Password />
      </div>

      <DeleteAccount />
    </div>
  );
};
export default ProfilePage;
