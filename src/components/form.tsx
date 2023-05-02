import InputField from './inputField';
import { useState } from 'react';
import { FormProps } from '../interfaces/formprops.interface';
import { InputValues } from '../interfaces/inputvalues.interface';

const Form = (props: FormProps) => {
  const { formName, onSubmit } = props;

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
    onSubmit(inputValues);
    setInputValues({ title: '', amount: 0, date: '' });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {formName === 'Savings' ? (
          <>
            <InputField
              label={`Amount of ${formName}`}
              name='amount'
              type='number'
              value={inputValues.amount}
              onChange={handleChange}
            />
            <button type='submit'>Add Savings</button>
          </>
        ) : formName === 'Target' ? (
          <>
            <InputField
              label={`Amount of ${formName}`}
              name='amount'
              type='number'
              value={inputValues.amount}
              onChange={handleChange}
            />
            <button type='submit'>Add / Reset Target</button>
          </>
        ) : (
          <>
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
            <button type='submit'>
              {formName === 'Expenses' ? 'Add Expense' : 'Add Income'}
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default Form;
