interface IDiscoverProps {
  isDropdownOpen: boolean;
}

const Discover: React.FC<IDiscoverProps> = ({ isDropdownOpen }) => {
  return (
    <div
      className={`
  fixed z-[149] top-0 left-0 right-0 pt-[126px] pb-[98px]  transition-all duration-300 rounded-b-lg bg-white ease-in-out
  ${
    isDropdownOpen ? 'visible translate-y-0' : 'invisible -translate-y-[100%]'
  }  `}
    >
      Discover
    </div>
  );
};
export default Discover;
