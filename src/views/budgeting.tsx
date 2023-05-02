import { useState } from 'react';
import { InputValues } from '../interfaces/inputvalues.interface';
import Form from '../components/form';
import TransactionList from '../components/transactionList';
import Balance from '../components/balance';

const Budgeting = () => {
  const [incomes, setIncomes] = useState<InputValues[]>([]);
  const [expenses, setExpenses] = useState<InputValues[]>([]);

  const handleExpenseSubmit = (inputData: InputValues) => {
    setExpenses([...expenses, inputData]);
  };

  const handleIncomeSubmit = (inputData: InputValues) => {
    setIncomes([...incomes, inputData]);
  };

  return (
    <>
      <Form formName='Income' onSubmit={handleIncomeSubmit} />
      <TransactionList inputData={incomes} />
      <Form formName='Expenses' onSubmit={handleExpenseSubmit} />
      <TransactionList inputData={expenses} />
      <Balance incomes={incomes} expenses={expenses} />
    </>
  );
};

export default Budgeting;
