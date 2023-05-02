import { useState } from 'react';
import Form from '../components/form';
import { InputValues } from '../interfaces/inputvalues.interface';

const Budgeting = () => {
  const [incomes, setIncomes] = useState<InputValues[]>([]);
  const [expenses, setExpenses] = useState<InputValues[]>([]);

  return (
    <>
      <Form formName='Income' />
      <Form formName='Expenses' />
    </>
  );
};

export default Budgeting;
