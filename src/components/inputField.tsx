import { InputProps } from '../interfaces/inputprops.interface';

const InputField = (props: InputProps) => {
  const { label, name, type, value, onChange } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;
