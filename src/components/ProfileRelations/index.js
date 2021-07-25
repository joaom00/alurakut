import * as S from './styles'

const ProfileRelations = ({ title, items }) => {
  return (
    <S.Wrapper>
      <S.SmallTitle>
        {title} ({items.data?.length})
      </S.SmallTitle>

      <ul>
        {items.isFetching
          ? 'Carregando...'
          : items.data?.map((itemAtual, index) => (
              <li key={index}>
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
