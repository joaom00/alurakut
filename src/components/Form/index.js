import * as S from './styles'
import Button from '../Button'

const Form = ({ handleSubmit, buttonText, children }) => {
  return (
    <S.Wrapper onSubmit={handleSubmit}>
      {children}
      <Button>{buttonText}</Button>
    </S.Wrapper>
  )
}

export default Form
