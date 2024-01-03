import { redirect } from 'next/navigation';

const page = () => {
  redirect('/account/order-history');
};
export default page;
