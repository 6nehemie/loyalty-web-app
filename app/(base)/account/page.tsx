import { BookCarCard } from '@/app/components';

const DashboardPage = () => {
  return (
    <div className="font-exo w-full py-10 px-4 md:px-10">
      <h1 className="text-3xl font-medium text-dark-gray mb-8">
        Tableau de bord
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
