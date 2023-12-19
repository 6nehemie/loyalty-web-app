type AntiFormBtnProps = {
  light?: boolean;
  label?: string;
  className?: string;
  onClick?: () => void;
};

const AntiFormBtn: React.FC<AntiFormBtnProps> = ({
  light,
  label,
  className,
  onClick,
}) => {
  const themeMode = light
    ? 'bg-white text-black hover:bg-zinc-200'
    : 'bg-dark-gray text-white hover:bg-cool-gray-1';

  return (
    <div
      onClick={onClick}
      className={`h-[48px] font-light flex items-center justify-center px-6 rounded-md ${themeMode} ${className} transition-colors duration-300 cursor-pointer`}
    >
      {label}
    </div>
  );
};
export default AntiFormBtn;
