import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

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
