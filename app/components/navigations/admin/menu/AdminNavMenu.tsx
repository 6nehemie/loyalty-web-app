'use client';

import { BellIcon, PersonIcon } from '@radix-ui/react-icons';
import MainDropDownMenu from './MainDropDownMenu';
import { useState } from 'react';
import NotificationDropDown from './NotificationDropDown';

interface IAdminNavMenuProps {
  adminFullName: string;
  adminEmailAddress: string;
}

const AdminNavMenu: React.FC<IAdminNavMenuProps> = ({
  adminFullName,
  adminEmailAddress,
}) => {
  const notifications = new Array(22).fill(0);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);

  const handleOpenMainMenu = () => {
    setIsMainMenuOpen(true);
  };

  const handleOpenNotificationMenu = () => {
    setIsNotificationMenuOpen(true);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div
          onClick={handleOpenNotificationMenu}
          className="relative p-2 border aspect-auto cursor-pointer border-neutral-700 hover:bg-neutral-700 transition-colors duration-200 rounded-full"
        >
          <BellIcon className="h-4 w-4" />

          <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white rounded-full"></div>
        </div>
        <NotificationDropDown
          isMenuOpen={isNotificationMenuOpen}
          notifications={notifications}
          setIsMenuOpen={setIsNotificationMenuOpen}
        />
      </div>

      <div className="relative">
        <div
          onClick={handleOpenMainMenu}
          className="h-8 w-8 cursor-pointer flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 border-neutral-700 rounded-full"
        >
          <PersonIcon className="h-4 w-4" />
        </div>
        <MainDropDownMenu
          isMenuOpen={isMainMenuOpen}
          fullName={adminFullName}
          email={adminEmailAddress}
          setIsMenuOpen={setIsMainMenuOpen}
        />
      </div>
    </div>
  );
};
export default AdminNavMenu;
