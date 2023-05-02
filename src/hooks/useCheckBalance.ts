import { useState, useEffect } from 'react';
import { InputValues } from '../interfaces/inputvalues.interface';

interface BalanceProps {
  incomes: InputValues[];
  expenses: InputValues[];
  savings: number;
}

const useCheckBalance = (props: BalanceProps) => {
  const { incomes, expenses, savings } = props;
  const [balance, setBalance] = useState<number>(0);

  //use effect to only cause render on incomes and expenses change
  useEffect(() => {
    const sumIncomes = incomes.reduce((acc, curr) => acc + curr.amount, 0);
    const sumExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const currentBalance = sumIncomes - sumExpenses - savings;
    setBalance(currentBalance);
  }, [incomes, expenses, savings]);

  const checkBalance = (amount: number): boolean => {
    return balance - amount >= 0;
  };
  return { balance, checkBalance };
};
export default useCheckBalance;