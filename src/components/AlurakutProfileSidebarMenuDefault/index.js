import config from '../../config'

import * as S from './styles'

const AlurakutProfileSidebarMenuDefault = () => {
  return (
    <S.Wrapper>
      <nav>
        <a href="/">
          <img src={`${config.BASE_URL}/icons/user.svg`} alt="" />
          Perfil
        </a>
        <a href="/">
          <img src={`${config.BASE_URL}/icons/book.svg`} alt="" />
          Recados
        </a>
        <a href="/">
          <img src={`${config.BASE_URL}/icons/camera.svg`} alt="" />
          Fotos
        </a>
        <a href="/">
          <img src={`${config.BASE_URL}/icons/sun.svg`} alt="" />
          Depoimentos
        </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={`${config.BASE_URL}/icons/plus.svg`} alt="" />
          GitHub Trends
        </a>
        <a href="/logout">
          <img src={`${config.BASE_URL}/icons/logout.svg`} alt="" />
          Sair
        </a>
      </nav>
    </S.Wrapper>
  )
}

export default AlurakutProfileSidebarMenuDefault
