import InputFields from './inputFields';

const Form = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputFields />
      </form>
    </>
  );
};

export default Form;
