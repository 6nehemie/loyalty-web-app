import Image from 'next/image';
import Link from 'next/link';

interface OrderHistoryCardProps {
  title: string;
  image: string;
  date: string;
  duration: number;
  price: string;
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
  title,
  image,
  date,
  duration,
  price,
}) => {
  return (
    <div className="border-2 border-light-gray rounded-md overflow-hidden font-exo">
      <div>
        <Image
          src={image}
          width={405}
          height={167}
          alt={`Image of ${title}`}
          className="h-[167px] object-cover"
        />
      </div>
      <div className="flex justify-between p-5">
        <div>
          <h3 className="mb-1 font-medium">{title}</h3>
          <p className="text-xs mb-1">{date}</p>
          <p className="text-xs">
            {duration} jour{duration > 1 ? 's' : ''} · {price}€
          </p>
        </div>
        <div className="flex flex-col justify-between items-end text-sm underline">
          <Link href={`/book`}>Réservez de nouveau</Link>
          <Link href={`/account/order-history/${title}`}>Détails</Link>
        </div>
      </div>
    </div>
  );
};
export default OrderHistoryCard;
