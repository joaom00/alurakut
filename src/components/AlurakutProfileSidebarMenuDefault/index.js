import config from '../../config';

import * as S from './styles';

const AlurakutProfileSidebarMenuDefault = () => {
  return (
    <S.Wrapper>
      <nav>
        <a href="/">
          <img src={`${config.BASE_URL}/icons/user.svg`} />
          Perfil
        </a>
        <a href="/">
          <img src={`${config.BASE_URL}/icons/book.svg`} />
          Recados
        </a>
        <a href="/">
          <img src={`${config.BASE_URL}/icons/camera.svg`} />
          Fotos
        </a>
        <a href="/">
          <img src={`${config.BASE_URL}/icons/sun.svg`} />
          Depoimentos
        </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={`${config.BASE_URL}/icons/plus.svg`} />
          GitHub Trends
        </a>
        <a href="/logout">
          <img src={`${config.BASE_URL}/icons/logout.svg`} />
          Sair
        </a>
      </nav>
    </S.Wrapper>
  );
};

export default AlurakutProfileSidebarMenuDefault;
