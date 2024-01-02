'use client';

import { createProduct, updateProduct } from '@/app/actions/fleetAction';
import { FileInput, Input, Submit } from '@/app/components';
import useFetchProduct from '@/app/hooks/useFetchProduct';
import { useParams, useRouter } from 'next/navigation';

const NewCarPage = () => {
  const router = useRouter();
  const params = useParams();

  const { carId } = params as { carId: string };

  const car = useFetchProduct(carId);
  console.log(car);

  const clientAction = async (formData: FormData) => {
    const result = await updateProduct(formData, carId);
    if (result?.error) {
      console.error(result.error);
    }
    router.refresh();
  };

  return (
    <div className="">
      <h1 className="admin-heading-1">Ajouter un véhicule</h1>

      <form action={clientAction} className="flex flex-col gap-8 max-w-[748px]">
        <div className="flex items-center gap-4">
          <FileInput
            label="Voiture"
            name="carImage"
            defaultValue={car?.carImage!}
          />
          <FileInput
            label="Wallpaper"
            name="wallpaper"
            defaultValue={car?.wallpaper!}
          />
        </div>
        <Input
          label="Marque *"
          name="brand"
          type="text"
          defaultValue={car?.brand}
          // required
        />
        <Input
          label="Modèle *"
          name="model"
          type="text"
          defaultValue={car?.model}
          // required
        />
        <Input
          label="Description courte *"
          name="shortDescription"
          type="text"
          defaultValue={car?.shortDescription!}
          // required
        />
        <Input
          label="Prix par jour *"
          name="pricePerDay"
          type="text"
          defaultValue={car?.price!}
          // required
        />
        <Input
          label="Age minimum *"
          name="minimumAge"
          type="text"
          defaultValue={car?.minAge!}
          // required
        />
        <Submit label="Submit" type="submit" />
      </form>
    </div>
  );
};
export default NewCarPage;
