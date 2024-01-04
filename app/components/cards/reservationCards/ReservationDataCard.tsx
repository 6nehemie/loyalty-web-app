import { ReactNode } from 'react';

const ReservationDataCard = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="bg-zinc-800 p-5 text-sm flex flex-col gap-4">
      {children}
    </div>
  );
};
export default ReservationDataCard;
