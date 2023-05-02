import { useState } from 'react';
import { InputValues } from '../interfaces/inputvalues.interface';
import Form from '../components/form';
import TransactionList from '../components/transactionList';
import useCheckBalance from '../hooks/useCheckBalance';

const Budgeting = () => {
  const [incomes, setIncomes] = useState<InputValues[]>([]);
  const [expenses, setExpenses] = useState<InputValues[]>([]);
  const { balance, checkBalance } = useCheckBalance({ incomes, expenses });

  const handleExpenseSubmit = (inputData: InputValues) => {
    if (checkBalance(inputData.amount)) {
      setExpenses([...expenses, inputData]);
    } else {
      alert('Balance too low!');
    }
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
      <h1>Balance: {balance}</h1>
    </>
  );
};

export default Budgeting;
