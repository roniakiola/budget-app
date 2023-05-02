interface InputProps {
  label: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: InputProps) => {
  const { label, name, type, value, onChange } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
