import * as S from './styles'

const ProfileRelations = ({ title, items }) => {
  return (
    <S.Wrapper>
      <S.SmallTitle>
        {title} ({items.length})
      </S.SmallTitle>

      <ul>
        {items.map((itemAtual) => (
          <li key={itemAtual.id}>
            <a href={`/users/${itemAtual.login}`}>
              <img
                alt="Imagem da miniatura"
                src={
                  itemAtual.login
                    ? `https://github.com/${itemAtual.login}.png`
                    : itemAtual.imageUrl
                }
              />
              <span>{itemAtual.login}</span>
            </a>
          </li>
        ))}
      </ul>
    </S.Wrapper>
  )
}

export default ProfileRelations
