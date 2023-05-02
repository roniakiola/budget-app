import { InputValues } from './inputvalues.interface';

export interface BalanceProps {
  incomes: InputValues[];
  expenses: InputValues[];
  savings: number;
}
