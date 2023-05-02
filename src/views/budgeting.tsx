import { useState } from 'react';
import { InputValues } from '../interfaces/inputvalues.interface';
import Form from '../components/form';
import TransactionList from '../components/transactionList';
import useCheckBalance from '../hooks/useCheckBalance';

const Budgeting = () => {
  const [incomes, setIncomes] = useState<InputValues[]>([]);
  const [expenses, setExpenses] = useState<InputValues[]>([]);
  const [savings, setSavings] = useState(0);
  const [target, setTarget] = useState(0);
  const { balance, checkBalance } = useCheckBalance({
    incomes,
    expenses,
    savings,
  });

  const handleExpenseSubmit = (inputData: InputValues) => {
    if (checkBalance(inputData.amount)) {
      const newExpense = {
        ...inputData,
        amount: parseInt(inputData.amount as any),
      };
      setExpenses([...expenses, newExpense]);
    } else {
      alert('Balance too low!');
    }
  };

  const handleIncomeSubmit = (inputData: InputValues) => {
    const newIncome = {
      ...inputData,
      amount: parseInt(inputData.amount as any),
    };
    setIncomes([...incomes, newIncome]);
  };

  const handleTransfer = (inputData: InputValues) => {
    const transferToSavings = (amount: number) => {
      if (checkBalance(amount)) {
        setSavings(savings + amount);
        return true;
      } else {
        alert('Balance too low!');
        return false;
      }
    };
    transferToSavings(parseInt(inputData.amount as any));
  };

  const addTarget = (inputData: InputValues) => {
    setTarget(inputData.amount);
  };

  return (
    <>
      <Form formName='Income' onSubmit={handleIncomeSubmit} />
      <TransactionList inputData={incomes} />
      <Form formName='Expenses' onSubmit={handleExpenseSubmit} />
      <TransactionList inputData={expenses} />
      <Form formName='Savings' onSubmit={handleTransfer} />
      <Form formName='Target' onSubmit={addTarget} />
      <h1>Balance: {balance}</h1>
      <h2>Savings: {savings}</h2>
      <h2>Target: {target}</h2>
    </>
  );
};

export default Budgeting;
