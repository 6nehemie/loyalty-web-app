import { navbarNavigation } from '@/app/constants';
import { Instagram, Linkedin } from 'lucide-react';
import Logo from '../../logos/Logo';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 p-10 space-y-10">
        {/* Intro Section */}
        <div className="text-left space-y-2">
          <Logo className="mb-10" />
          <h3 className="text-lg font-medium">
            Planifiez votre année avec LOYALTY-RC.
          </h3>
          <p className="text-gray-400 text-sm max-w-[580px] w-full">
            Profitez d'une mobilité premium partout en Europe, que ce soit pour
            un court ou un long séjour. Louez votre voiture facilement et
            profitez de la liberté de voyager à votre rythme.
          </p>
        </div>

        {/* Columns Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Car Rental Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium">Voitures à louer</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>- Porsche</li>
              <li>- Mercedes AMG</li>
              <li>- Audi RS</li>
              <li>- BMW</li>
              <li>- Ferrari</li>
              <li>- Lamborghini</li>
              <li>- Bentley</li>
              <li>- McLaren</li>
            </ul>
          </div>

          {/* Company Info Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium">
              Informations sur l'entreprise
            </h4>
            <p className="text-sm text-gray-400">
              LOYALTY-RC
              <br />
              BUREAU 3, 38 Boulevard Carnot, 59800 Lille
              <br />
              SIREN: 952 013 811 | TVA: FR23 952 013 811
            </p>
            <p className="text-sm text-gray-400">info@loyaltyrc.com</p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium">Pages</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              {navbarNavigation.map((item) => (
                <li key={item.label}>
                  <a href={item.link} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media and Legal Links */}
        <div className="mt-12 text-left space-y-6">
          <h4 className="text-lg font-medium">Suivez-nous</h4>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-white">
              YouTube Icon
            </a> */}
          </div>

          <div className="border-t border-gray-700 pt-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white mr-4">
              Mentions légales et confidentialité
            </a>
            <a href="#" className="hover:text-white">
              Termes et conditions
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-left text-gray-400 mt-4 text-xs">
          ©2024 LOYALTY-RC. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
