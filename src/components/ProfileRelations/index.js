import * as S from './styles'

const ProfileRelations = ({ title, items }) => {
  return (
    <S.Wrapper>
      <S.SmallTitle>
        {title} ({items.data?.length})
      </S.SmallTitle>

      <ul>
        {items.isLoading
          ? 'Carregando...'
          : items.data?.map((itemAtual, index) => (
              <li key={index}>
                <a href={`/users/${itemAtual.login}`}>
                  <img
                    alt="Imagem da miniatura"
                    src={itemAtual.avatar_url ?? itemAtual.imageUrl}
                  />
                  <span>{itemAtual.login ?? itemAtual.title}</span>
                </a>
              </li>
            ))}
      </ul>
    </S.Wrapper>
  )
}

export default ProfileRelations
