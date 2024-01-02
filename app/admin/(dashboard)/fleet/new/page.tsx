'use client';

import { FileInput, Input, Submit } from '@/app/components';

const NewCarPage = () => {
  const clientAction = async (formData: FormData) => {};

  return (
    <div className="">
      <h1 className="admin-heading-1">Ajouter un véhicule</h1>

      <form action={clientAction} className="flex flex-col gap-8 max-w-[748px]">
        <div className="flex items-center gap-4">
          <FileInput label="Voiture" name="carImage" />
          <FileInput label="Wallpaper" name="wallpaper" />
        </div>
        <Input label="Marque *" name="brand" type="text" required />
        <Input label="Modèle *" name="model" type="text" required />
        <Input
          label="Description courte *"
          name="shortDescription"
          type="text"
          required
        />
        <Input
          label="Prix par jour *"
          name="shortDescription"
          type="text"
          required
        />
        <Input label="Age minimum *" name="minimumAge" type="text" required />
        <Submit label="Submit" type="submit" />
      </form>
    </div>
  );
};
export default NewCarPage;
