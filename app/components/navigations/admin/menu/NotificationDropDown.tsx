'use client';

import { useClickOutside } from '@/app/hooks';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { useRef, useState } from 'react';

enum NotificationType {
  MESSAGE = 'MESSAGE',
  INBOX = 'INBOX',
}

interface INotificationDropDownProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  notifications?: String[];
}

const NotificationDropDown: React.FC<INotificationDropDownProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  notifications,
}) => {
  const date = new Date(Date.now()).toDateString();
  const menuRef = useRef<HTMLDivElement>(null);
  const [notificationType, setNotificationType] = useState<NotificationType>(
    NotificationType.INBOX
  );

  useClickOutside(menuRef, () => {
    setIsMenuOpen(false);

    // to avoid weird glitching when resetting the state
    setTimeout(() => {
      setNotificationType(NotificationType.INBOX);
    }, 200);
  });

  const bubbleStyle =
    'bg-neutral-700 text-xs font-exo text-neutral-300 p-0.5 px-1.5 rounded-full';

  const navigationStyle =
    'flex justify-center gap-2 items-center h-12 cursor-pointer transition-colors duration-200';

  const handleNavigationStyle = (type: NotificationType) => {
    return navigationStyle + (notificationType === type ? ' border-b' : '');
  };

  const handleToInbox = () => {
    if (notificationType === NotificationType.INBOX) return;
    setNotificationType(NotificationType.INBOX);
  };
  const handleToMessage = () => {
    if (notificationType === NotificationType.MESSAGE) return;
    setNotificationType(NotificationType.MESSAGE);
  };

  return (
    <div
      ref={menuRef}
      className={` ${
        isMenuOpen ? 'visible opacity-100' : 'opacity-0 invisible'
      } absolute z-[100] right-0 top-10 w-[400px] bg-neutral-900 border border-neutral-700 rounded-lg  transition-all duration-200`}
    >
      <div className="px-5 flex gap-6 border-b border-b-neutral-700">
        <div
          onClick={handleToInbox}
          className={`${handleNavigationStyle(NotificationType.INBOX)}`}
        >
          <span>Inbox</span>

          <span className={bubbleStyle}>{notifications!.length}</span>
        </div>

        <div
          onClick={handleToMessage}
          className={`${handleNavigationStyle(NotificationType.MESSAGE)}`}
        >
          <span>Messages</span>
          <span className={bubbleStyle}>{notifications!.length}</span>
        </div>
      </div>

      <div className="min-h-[500px] max-h-[700px] overflow-hidden overflow-y-scroll">
        {notificationType === NotificationType.INBOX &&
          notifications?.map((notification, index) => (
            <div
              key={index}
              className={`flex gap-6 p-5 hover:bg-neutral-800 transition-colors duration-200 cursor-pointer border-b border-b-neutral-700 ${
                index < 5 && 'bg-neutral-800'
              }`}
            >
              <div className="h-10 w-10 aspect-square rounded-full flex items-center justify-center bg-green-900 bg-opacity-30 border border-green-800">
                <CheckCircledIcon className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p>
                  <span className="text-white">Nehemie Mombanga</span> vient de
                  réserver une Audi RS3 !
                </p>
                <span>{date}</span>
              </div>
            </div>
          ))}

        {notificationType === NotificationType.MESSAGE &&
          notifications?.map((notification, index) => (
            <div
              key={index}
              className={`p-5 hover:bg-neutral-800 transition-colors duration-200 cursor-pointer  border-b border-b-neutral-700
              ${index < 3 && 'bg-neutral-800'}
              `}
            >
              <div>
                <p>
                  <span className="text-white">Nehemie Mombanga</span> vient de
                  vous envoyer un message.
                </p>
                <span>{date}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default NotificationDropDown;
