import * as S from './styles';

const ProfileRelations = ({ title, array }) => {
  return (
    <S.Wrapper>
      <S.SmallTitle>
        {title} ({array.slice(0, 6).length})
      </S.SmallTitle>

      <ul>
        {array.slice(0, 6).map((itemAtual) => (
          <li key={itemAtual}>
            <a href={`/users/${itemAtual}`}>
              <img src={`https://github.com/${itemAtual}.png`} />
              <span>{itemAtual}</span>
            </a>
          </li>
        ))}
      </ul>
    </S.Wrapper>
  );
};

export default ProfileRelations;
