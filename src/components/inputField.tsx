type InputProps = {
  name: string;
  type: string;
  value: string | number;
};

const InputField = (props: InputProps) => {
  const { name, type, value } = props;
  return (
    <>
      <label htmlFor={name}>
        <p>{name}</p>
        <input id={name} type={type} value={value} />
      </label>
    </>
  );
};

export default InputField;
