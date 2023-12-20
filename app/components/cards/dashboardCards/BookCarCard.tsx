import Image from 'next/image';
import Link from 'next/link';

interface BookCarCardProps {
  image?: string;
  imgTitle?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  btnLabel?: string;
}

const BookCarCard: React.FC<BookCarCardProps> = ({
  image,
  title,
  imgTitle,
  subtitle,
  description,
  btnLabel,
}) => {
  return (
    <div className="flex flex-col gap-10 justify-between p-5 font-exo border-2 border-light-gray rounded-md">
      {image && (
        <Image
          src={image}
          alt={imgTitle || ''}
          width={291}
          height={119}
          className="mx-auto opacity-50"
        />
      )}
      <div className="flex justify-between items-end text-sm">
        <div className="">
          <h3 className="font-medium">{title}</h3>
          <h4 className="text-cool-gray-1">{subtitle}</h4>
        </div>
        <Link
          href={'/fleet'}
          className="underline text-cool-gray-1 hover:text-dark-gray transition-colors duration-200"
        >
          {btnLabel}
        </Link>
      </div>
    </div>
  );
};
export default BookCarCard;
