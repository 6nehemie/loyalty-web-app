'use client';

import { MyProfilCard } from '@/app/components';
import { userInfos } from '@/app/constants';

interface IEmailProps {
  email?: string | null | undefined;
}

const Email: React.FC<IEmailProps> = ({ email }) => {
  const handleNameEdit = () => {};
  return (
    <div>
      <MyProfilCard
        title="E-mail"
        btnAction={handleNameEdit}
        btnLabel="Éditer"
        displayBtn={email ? true : false}
      >
        <div>
          <p>{email}</p>
        </div>
      </MyProfilCard>
    </div>
  );
};
export default Email;
