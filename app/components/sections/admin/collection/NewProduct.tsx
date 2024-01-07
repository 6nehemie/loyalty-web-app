'use client';

import { FileInput, Input } from '@/app/components';
import TextArea from '@/app/components/admin-input/TextArea';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface NewProductProps {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
}

const NewProduct: React.FC<NewProductProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <form
      className={`${
        isMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'
      } transition-transform duration-300 fixed z-[200] rounded rounded-l-lg flex flex-col top-0 right-0 w-1/3 bg-zinc-800 h-screen`}
    >
      <div className="p-5 border-b border-b-zinc-600 flex justify-between items-center">
        <h3>Ajouter un véhicule</h3>

        <div
          onClick={setIsMenuOpen}
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
            subLabel="e.g. Marque suivis du modèle du véhicule"
            className="bg-zinc-900"
          />

          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Marque *"
              name="brand"
              type="text"
              subLabel='e.g. "Audi"'
              className="bg-zinc-900"
            />
            <Input
              label="Modèle *"
              name="model"
              type="text"
              subLabel='e.g. "RS3"'
              className="bg-zinc-900"
            />
          </div>

          <Input
            label="Description courte *"
            name="shortDescription"
            type="text"
            subLabel='e.g. "La compacte sportive par excellence"'
            className="bg-zinc-900"
          />

          <TextArea
            label="Description"
            name="description"
            subLabel="Affiché dans les détails du véhicule."
            className="bg-zinc-900"
          />

          <TextArea
            label="Embed Youtube"
            name="embedData"
            rows={5}
            placeholder='<iframe width="560" height="315" src="https://www.youtube.com/embed/9XaS93WMRQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            subLabel="Intégrer une Vidéo YouTube."
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
            className="bg-zinc-900"
          />
          <Input
            label="Caution *"
            name="caution"
            type="number"
            subLabel="Caution de Réservation"
            className="bg-zinc-900"
          />
          <Input
            label="Age minimum du conducteur *"
            name="driverMinimumAge"
            type="number"
            subLabel="Caution de Réservation"
            className="bg-zinc-900"
          />
        </div>
        <div></div>
      </div>

      <div className="px-5 py-3.5 border-t border-t-zinc-600 flex justify-end items-center gap-2">
        <p className="text-sm cursor-pointer text-white bg-zinc-900 py-1.5 px-3 rounded-md hover:bg-zinc-950 transition-colors duration-200">
          Annuler
        </p>
        <button className="text-sm text-dark-gray bg-white py-1.5 px-3 rounded-md hover:bg-neutral-300 transition-colors duration-200">
          Ajouter véhicule
        </button>
      </div>
    </form>
  );
};
export default NewProduct;
