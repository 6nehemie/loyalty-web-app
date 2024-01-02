import { redirect } from 'next/navigation';

const page = () => {
  redirect('/admin/fleet');
  return <div>page</div>;
};
export default page;
