interface SubmitProps {
  label: string;
  type: 'submit' | 'reset' | 'button';
}

const Submit: React.FC<SubmitProps> = ({
  label = 'Submit',
  type = 'submit',
}) => {
  return (
    <button
      type={type}
      className="bg-white py-1.5 px-3.5 w-max text-black text-sm font-medium rounded-md border border-neutral-700 hover:bg-neutral-200  transition-colors duration-200"
    >
      {label}
    </button>
  );
};
export default Submit;
