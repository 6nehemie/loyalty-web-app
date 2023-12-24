'use client';

import { Backdrop, InputFrom, MyProfilCard } from '@/app/components';

interface INameProps {
  firstName: string;
  lastName: string;
}

const Name: React.FC<INameProps> = ({ firstName, lastName }) => {
  const handleNameEdit = () => {};

  return (
    <>
      <div>
        <MyProfilCard
          title="Nom Complet"
          btnAction={handleNameEdit}
          btnLabel="Éditer"
          displayBtn={firstName && lastName ? true : false}
        >
          <div>
            <p>
              {firstName} {lastName}
            </p>
          </div>
        </MyProfilCard>
      </div>
      <>
        <Backdrop isActive={true} />
        <div className="z-[1000] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className={`max-w-[772px] w-full bg-white p-10 rounded-lg`}>
            <h1 className="heading-4 mb-4">Modifier votre nom</h1>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <InputFrom label="Prénom" name="firstName" type="text" />
                <InputFrom label="Nom" name="lastName" type="text" />
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};
export default Name;
