import * as S from "./styles";

const Form = ({ handleSubmit, buttonText, children }) => {
  return (
    <form onSubmit={handleSubmit}>
      {children}
      <S.Button>{buttonText}</S.Button>
    </form>
  );
};

export default Form;
