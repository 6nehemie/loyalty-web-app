import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CreditCardIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export const menuNavigation = [
  {
    label: 'Nos Véhicules',
    link: '/fleet',
    icon: <ArrowRightIcon className="h-4 w-4" />,
  },
  {
    label: 'Abonnements',
    link: '/subscriptions',
    icon: <ArrowRightIcon className="h-4 w-4" />,
  },
  {
    label: 'Shop',
    link: '/shop',
    icon: <ArrowTopRightOnSquareIcon className="h-4 w-4" />,
  },
  {
    label: 'Le journal',
    link: '/blog',
    icon: <ArrowRightIcon className="h-4 w-4" />,
  },
  {
    label: 'Contact',
    link: '/contact',
    icon: <ArrowRightIcon className="h-4 w-4" />,
  },
  {
    label: 'Messages',
    link: '/messages',
    icon: <ArrowRightIcon className="h-4 w-4" />,
  },
  {
    label: 'Notifications',
    link: '/notifications',
    icon: <ArrowRightIcon className="h-4 w-4" />,
  },
  { label: 'À propos de nous', link: '/about' },
];

export const accountNavigation = [
  {
    label: 'Tableau de bord',
    link: '/account',
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    label: 'Mon Profil LoyaltyRC',
    link: '/account/profile-settings',
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    label: 'Mode de paiement',
    link: '/account/payment-method',
    icon: <CreditCardIcon className="h-5 w-5" />,
  },
  {
    label: 'Historique des commandes',
    link: '/account/order-history',
    icon: <ClockIcon className="h-5 w-5" />,
  },
  {
    label: 'Messages',
    link: '/account/messages',
    icon: <ChatBubbleLeftRightIcon className="h-5 w-5" />,
  },
];
