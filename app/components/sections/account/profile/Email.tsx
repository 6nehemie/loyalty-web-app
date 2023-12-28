'use client';

import { MyProfilCard } from '@/app/components';
import { userInfos } from '@/app/constants';
import axios, { AxiosError } from 'axios';

interface IEmailProps {
  email?: string | null | undefined;
}

const Email: React.FC<IEmailProps> = ({ email }) => {
  const resetEmail = async () => {
    try {
      const result = await axios.post('/api/welcome');
      if (result.data.error) throw new Error(result.data.error.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <MyProfilCard
        title="E-mail"
        btnAction={resetEmail}
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
