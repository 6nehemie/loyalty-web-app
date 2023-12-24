'use client';

import { MyProfilCard } from '@/app/components';

interface INameProps {
  firstName: string;
  lastName: string;
}

const Name: React.FC<INameProps> = ({ firstName, lastName }) => {
  const handleNameEdit = () => {};

  return (
    <div>
      <MyProfilCard
        title="Nom Complet"
        btnAction={handleNameEdit}
        btnLabel="Éditer"
        displayBtn={firstName && lastName ? true : false}
      >
        <div>
          <p>
            {firstName} {lastName}
          </p>
        </div>
      </MyProfilCard>
    </div>
  );
};
export default Name;
