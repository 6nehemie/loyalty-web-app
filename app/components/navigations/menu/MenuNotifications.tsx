interface MenuNotificationsProps {
  closeMenu?: () => void;
  showMenu?: boolean;
}

const MenuNotifications: React.FC<MenuNotificationsProps> = (
  closeMenu,
  showMenu
) => {
  return <div className={`menu-content`}>MenuNotifications</div>;
};
export default MenuNotifications;
