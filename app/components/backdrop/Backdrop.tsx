interface BackdropProps {
  isActive?: boolean;
}

const Backdrop: React.FC<BackdropProps> = ({ isActive }) => {
  return (
    <div
      className={`fixed backdrop transition-all duration-200 ${
        isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
      } 
  `}
    ></div>
  );
};
export default Backdrop;
