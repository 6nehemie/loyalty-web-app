interface BackdropProps {
  isActive?: boolean;
  zIndex?: number;
}

const Backdrop: React.FC<BackdropProps> = ({ isActive, zIndex }) => {
  return (
    <div
      className={`fixed backdrop transition-all duration-200 ${
        zIndex ? `z-[${zIndex}]` : 'z-50'
      } ${isActive ? 'opacity-100 visible' : 'opacity-0 invisible'} 
  `}
    ></div>
  );
};
export default Backdrop;
