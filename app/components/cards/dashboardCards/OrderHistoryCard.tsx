import stripe from '@/app/utils/stripe';
import Image from 'next/image';
import Link from 'next/link';

interface OrderHistoryCardProps {
  title?: string;
  image: string;
  date?: string;
  checkoutSessionId?: string;
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = async ({
  title,
  image,
  date,
  checkoutSessionId,
}) => {
  const stripeOrderData = await stripe.checkout.sessions.retrieve(
    checkoutSessionId as string
  );

  console.log('Session: ', stripeOrderData);
  const durationInDays = Number(stripeOrderData.metadata?.rentalDays);
  const price = (stripeOrderData.amount_total || 0) / 100;

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
            {durationInDays} jour{durationInDays > 1 ? 's' : ''} · {price}€
          </p>
        </div>
        <div className="flex flex-col justify-between items-end text-sm underline">
          <Link href={`/reservation`}>Réserver de nouveau</Link>
          <Link href={`/account/order-history/${title}`}>Détails</Link>
        </div>
      </div>
    </div>
  );
};
export default OrderHistoryCard;
