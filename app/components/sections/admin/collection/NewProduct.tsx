'use client';

import { createProduct } from '@/app/actions/products/createProduct';
import { FileInput, Input } from '@/app/components';
import TextArea from '@/app/components/admin-input/TextArea';
import { IProductsValidationErrors } from '@/app/types';
import { productsValidation } from '@/app/utils/products/productsValidation';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface NewProductProps {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
}

const NewProduct: React.FC<NewProductProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState<IProductsValidationErrors>({
    title: '',
    brand: '',
    model: '',
    shortDescription: '',
    description: '',
    embedData: '',
    carImage: '',
    wallpaper: '',
    pricePerDay: '',
    caution: '',
    driverMinimumAge: '',
  });

  const clientAction = async (fromData: FormData) => {
    setIsPending(true);
    try {
      const response = await createProduct(fromData);
      if (response?.errors) {
        // Handle errors
        productsValidation(response.errors, setErrors);
        console.error(response.errors);
      } else {
        productsValidation([], setErrors);
        setIsMenuOpen();
        router.push('/admin/collection');
      }
    } catch (error) {
      console.error(error);
    }
    setIsPending(false);
  };

  return (
    <form
      action={clientAction}
      className={`${
        isMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'
      } transition-transform duration-300 fixed z-[200] rounded rounded-l-lg flex flex-col top-0 right-0 w-1/3 bg-zinc-800 h-screen`}
    >
      <div className="p-5 border-b border-b-zinc-600 flex justify-between items-center">
        <h3>Ajouter un véhicule</h3>

        <div
          onClick={() => {
            productsValidation([], setErrors);
            setIsMenuOpen();
          }}
          className="cursor-pointer hover:bg-zinc-700 transition-colors duration-200 p-1 rounded-md"
        >
          <XMarkIcon className="h-5 w-5" />
        </div>
      </div>

      <div className="p-5 pb-10 h-max overflow-auto overflow-y-auto">
        <div className="flex flex-col gap-4">
          <Input
            label="Titre *"
            name="title"
            type="text"
            error={!!errors?.title}
            errorMessage={errors?.title}
            subLabel="e.g. Marque suivis du modèle du véhicule"
            className="bg-zinc-900"
          />

          <div>
            <div className="grid grid-cols-2 gap-2">
              <Input
                label="Marque *"
                name="brand"
                type="text"
                error={!!errors?.brand}
                errorMessage={errors?.brand}
                subLabel='e.g. "Audi"'
                className="bg-zinc-900"
              />
              <Input
                label="Modèle *"
                name="model"
                type="text"
                error={!!errors?.model}
                errorMessage={errors?.model}
                subLabel='e.g. "RS3"'
                className="bg-zinc-900"
              />
            </div>
            <div>
              {(errors.carImage || errors.wallpaper) && (
                <div className="flex gap-2 text-red-500 text-sm mt-2">
                  <p>Veuillez sélectionner les images demandé</p>
                </div>
              )}
            </div>
          </div>

          <Input
            label="Description courte *"
            name="shortDescription"
            type="text"
            error={!!errors?.shortDescription}
            errorMessage={errors?.shortDescription}
            subLabel='e.g. "La compacte sportive par excellence"'
            className="bg-zinc-900"
          />

          <TextArea
            label="Description"
            name="description"
            error={!!errors?.description}
            errorMessage={errors?.description}
            subLabel="Affiché dans les détails du véhicule."
            className="bg-zinc-900"
          />

          <div>
            <h4 className="text-sm font-bold">Images</h4>
            <div className="flex gap-2">
              <FileInput label="Voiture" name="carImage" />
              <FileInput label="Wallpaper" name="wallpaper" />
            </div>
          </div>

          <Input
            label="Prix par jour *"
            name="pricePerDay"
            type="number"
            error={!!errors?.pricePerDay}
            errorMessage={errors?.pricePerDay}
            className="bg-zinc-900"
          />
          <Input
            label="Caution *"
            name="caution"
            type="number"
            error={!!errors?.caution}
            errorMessage={errors?.caution}
            subLabel="Caution de Réservation"
            className="bg-zinc-900"
          />
          <Input
            label="Age minimum du conducteur *"
            name="driverMinimumAge"
            type="number"
            error={!!errors?.driverMinimumAge}
            errorMessage={errors?.driverMinimumAge}
            subLabel="Caution de Réservation"
            className="bg-zinc-900"
          />
        </div>

        <div></div>
      </div>

      <div className="px-5 py-3.5 border-t border-t-zinc-600 flex justify-end items-center gap-2">
        <p
          onClick={setIsMenuOpen}
          className="text-sm cursor-pointer text-white bg-zinc-900 py-1.5 px-3 rounded-md hover:bg-zinc-950 transition-colors duration-200"
        >
          Annuler
        </p>
        <button
          disabled={isPending}
          className={`text-sm text-dark-gray bg-white py-1.5 px-3 rounded-md hover:bg-neutral-300 transition-colors duration-200 ${
            isPending && 'bg-neutral-400 cursor-not-allowed'
          }`}
        >
          Ajouter véhicule
        </button>
      </div>
    </form>
  );
};
export default NewProduct;
