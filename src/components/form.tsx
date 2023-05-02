import InputField from './inputField';
import { useState } from 'react';

type FormProps = {
  formName: string;
};
type InputValues = {
  source: string;
  amount: number;
  date: string;
};

const Form = (props: FormProps) => {
  const { formName } = props;

  const [inputValues, setInputValues] = useState<InputValues>({
    source: '',
    amount: 0,
    date: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          name={`Source of ${formName}`}
          type={'text'}
          value={inputValues.source}
        />
        <InputField
          name={`Amount of ${formName}`}
          type={'number'}
          value={inputValues.amount}
        />
        <InputField
          name={`Date of ${formName}`}
          type={'date'}
          value={inputValues.date}
        />
      </form>
    </>
  );
};

export default Form;
