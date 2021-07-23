import AlurakutProfileSidebarMenuDefault from '../AlurakutProfileSidebarMenuDefault'
import * as S from './styles'

const ProfileSidebar = ({ githubUser }) => {
  return (
    <S.Wrapper>
      <img
        src={`https://github.com/${githubUser}.png`}
        style={{ borderRadius: '8px' }}
        alt="Foto de João Pedro"
      />
      <hr />

      <a href={`https://github.com/${githubUser}`}>@{githubUser}</a>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </S.Wrapper>
  )
}

export default ProfileSidebar
