import { getAdminUser } from '@/app/utils/adminUtils';

const AdminUserInfo = async () => {
  const admin = await getAdminUser();
  return (
    <div className="flex justify-between items-center w-full mb-10">
      <h3 className="font-medium text-lg ">
        Ravi de vous revoir, {admin?.firstName} 👋
      </h3>

      <div>
        <p className="text-sm">{admin?.email}</p>
      </div>
    </div>
  );
};
export default AdminUserInfo;
