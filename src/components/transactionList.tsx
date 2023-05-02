import { ListProps } from '../interfaces/listprops.interface';

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
