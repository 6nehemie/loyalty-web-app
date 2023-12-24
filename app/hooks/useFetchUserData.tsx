'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getUser } from '../actions/getUser';
import { User } from '../types';

const useFetchUserData = () => {
  const session = useSession();
  const email = session.data?.user?.email;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      if (!email) return;
      const response = await getUser(email);
      if (response.data) setUser(response.data);
    })();
  }, [email]);

  return user;
};
export default useFetchUserData;
