type InputProps = {
  // source: string;
  // amount: number;
  // date: string;
};

const InputFields = () => {
  return (
    <>
      <label htmlFor='source'>
        <p>Income source</p>
        <input type='text' id='source' />
      </label>
      <label htmlFor='amount'>
        <p>Amount of income</p>
        <input type='number' id='amount' />
      </label>
      <label htmlFor='date'>
        <p>Date of income</p>
        <input type='date' id='date' />
      </label>
      <button type='submit'>Add income</button>
    </>
  );
};

export default InputFields;
