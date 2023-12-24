import Link from 'next/link';

type Button1Props = {
  children?: React.ReactNode;
  link: string;
  light?: boolean;
  className?: string;
};

const Button1: React.FC<Button1Props> = ({
  children,
  link,
  light,
  className,
}) => {
  const themeMode = light
    ? 'bg-white text-black hover:bg-zinc-200'
    : 'bg-dark-gray text-white hover:bg-cool-gray-1';

  return (
    <Link
      href={link}
      className={`h-[48px] flex items-center justify-center px-6 rounded-md ${themeMode} ${className} transition-colors duration-300`}
    >
      {children}
    </Link>
  );
};
export default Button1;
