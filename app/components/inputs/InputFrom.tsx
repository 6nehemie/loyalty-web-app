interface InputFromProps {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
}

const InputFrom: React.FC<InputFromProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
}) => {
  return (
    <div className="flex flex-col font-light">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className="h-[54px] border-2 bg-light-gray rounded-md px-4 outline-none"
      />
    </div>
  );
};
export default InputFrom;
