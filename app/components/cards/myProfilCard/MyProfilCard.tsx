'use client';

interface MyProfilCardProps {
  title: string;
  children: React.ReactNode;
  btnLabel?: string;
  displayBtn?: boolean;
  btnAction?: () => void;
}

const MyProfilCard: React.FC<MyProfilCardProps> = ({
  title,
  children,
  btnLabel,
  btnAction,
  displayBtn = false,
}) => {
  return (
    <div className="font-exo py-4">
      <h4 className="text-[15px] text-cool-gray-1 mb-1">{title}</h4>
      {children}
      {displayBtn && (
        <button
          onClick={btnAction}
          className="text-cool-gray-1 mt-6 text-[15px] font-light underline hover:text-black transition-colors duration-200"
        >
          {btnLabel}
        </button>
      )}
    </div>
  );
};
export default MyProfilCard;
