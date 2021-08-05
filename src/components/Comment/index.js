import * as S from './styles'
const Comment = ({ comment, user }) => {
  return (
    <S.Wrapper>
      <S.UserImage src={`https://github.com/${user}.png`} />
      <S.Comment>{comment}</S.Comment>
    </S.Wrapper>
  )
}

export default Comment
