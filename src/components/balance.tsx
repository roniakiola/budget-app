import { InputValues } from '../interfaces/inputvalues.interface';

interface BalanceProps {
  incomes: InputValues[];
  expenses: InputValues[];
}

const Balance = (props: BalanceProps) => {
  const { incomes, expenses } = props;
  const sumIncomes = incomes.reduce((acc, curr) => acc + curr.amount, 0);
  const sumExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = sumIncomes - sumExpenses;
  console.log(balance);

  return (
    <>
      <h1>{balance}</h1>
    </>
  );
};

export default Balance;
