import InputField from './inputField';
import { useState } from 'react';

interface FormProps {
  formName: string;
}
interface InputValues {
  title: string;
  amount: number;
  date: string;
}

const Form = (props: FormProps) => {
  const { formName } = props;

  const [inputValues, setInputValues] = useState<InputValues>({
    title: '',
    amount: 0,
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
    console.log(inputValues);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValues);
    setInputValues({ title: '', amount: 0, date: '' });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          label={`Source of ${formName}`}
          name='title'
          type='text'
          value={inputValues.title}
          onChange={handleChange}
        />
        <InputField
          label={`Amount of ${formName}`}
          name='amount'
          type='number'
          value={inputValues.amount}
          onChange={handleChange}
        />
        <InputField
          label={`Date of ${formName}`}
          name='date'
          type='date'
          value={inputValues.date}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default Form;
