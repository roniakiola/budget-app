import { InputValues } from '../interfaces/inputvalues.interface';

interface ListProps {
  inputData: InputValues[];
}
const TransactionList = (props: ListProps) => {
  const { inputData } = props;
  return (
    <>
      <ul>
        {inputData.map((data, index) => (
          <li
            key={index}
          >{`Title: ${data.title} | Amount: ${data.amount}€ | Date: ${data.date}`}</li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
