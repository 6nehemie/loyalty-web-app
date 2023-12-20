import { BookCarCard, OrderHistoryCard } from '@/app/components';
import { orderHistory } from '@/app/constants';

const page = () => {
  return (
    <div className="w-full">
      <h1 className="dashboard-heading">Historique des commandes</h1>
      <div className="account-grid w-full">
        {orderHistory.map((order, index) => (
          <OrderHistoryCard
            image={order.image}
            date={order.date}
            duration={order.duration}
            price={order.price}
            title={order.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default page;
