'use client';

import { AddInfoBtn, MyProfilCard } from '@/app/components';
import { userInfos } from '@/app/constants';

const page = () => {
  const handleNameEdit = () => {};
  const handleAddNumber = () => {};
  return (
    <div className="w-full">
      <h1 className="dashboard-heading">Mon Profil Loyalty</h1>
      {/* PROFILE SETTINGS */}
      <div className="account-grid w-full mb-16">
        {/* NAME */}
        <MyProfilCard
          title="Nom Complet"
          btnAction={handleNameEdit}
          btnLabel="Éditer"
          displayBtn={userInfos.firstName && userInfos.lastName ? true : false}
        >
          <div>
            <p>
              {userInfos.firstName} {userInfos.lastName}
            </p>
          </div>
        </MyProfilCard>

        {/* ADDRESS */}
        <MyProfilCard
          title="Addresse"
          btnAction={handleNameEdit}
          btnLabel="Éditer"
          displayBtn={userInfos.address ? true : false}
        >
          <div className="">
            <p>{userInfos.address.street}</p>
            <p>
              {userInfos.address.city}, {userInfos.address.zip}
            </p>
            <p>{userInfos.address.country}</p>
          </div>
        </MyProfilCard>

        {/* PHONE NUMBER */}
        <MyProfilCard
          title="Numéro de téléphone"
          btnAction={handleNameEdit}
          btnLabel="Éditer"
          displayBtn={!userInfos.phone ? true : false}
        >
          <div>
            {!userInfos.phone ? (
              <p>{userInfos.phone}</p>
            ) : (
              <AddInfoBtn
                btnLabel="Ajouter nouveau"
                btnAction={handleAddNumber}
              />
            )}
          </div>
        </MyProfilCard>
      </div>
      {/* SECURITY SETTINGS */}
      <h3 className="heading-4">Sécurité</h3>

      <div className="account-grid w-full mb-16">
        {/* EMAIL */}
        <MyProfilCard
          title="E-mail"
          btnAction={handleNameEdit}
          btnLabel="Éditer"
          displayBtn={userInfos.email ? true : false}
        >
          <div>
            <p>
              {userInfos.firstName} {userInfos.lastName}
            </p>
          </div>
        </MyProfilCard>

        {/* PASSWORD */}
        <MyProfilCard
          title="Mot de passe"
          btnAction={handleNameEdit}
          btnLabel="Rénitialiser"
          displayBtn={userInfos.address ? true : false}
        >
          <p>* * * * * * * * * * * *</p>
        </MyProfilCard>
      </div>

      <button className="font-exo font-light underline">
        Supprimer mon compte Loyalty.RC
      </button>
    </div>
  );
};
export default page;
