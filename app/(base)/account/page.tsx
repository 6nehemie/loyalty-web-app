import { BookCarCard } from '@/app/components';

const DashboardPage = () => {
  return (
    <div className="w-full">
      <h1 className="dashboard-heading">Tableau de bord</h1>
      <div className="account-grid w-full">
        <BookCarCard
          imgTitle="Image of an audi rs3"
          image="https://utfs.io/f/5525718d-aff4-4c1d-b5e7-d4997404cf29-g3vg1q.png"
          title="Réservez un véhicule"
          subtitle="Parcourez nos modèles"
          btnLabel="Réservez maintenant"
        />
      </div>
    </div>
  );
};
export default DashboardPage;
