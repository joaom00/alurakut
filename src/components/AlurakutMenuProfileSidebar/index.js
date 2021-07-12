import AlurakutProfileSidebarMenuDefault from '../AlurakutProfileSidebarMenuDefault';

import * as S from './styles';

const AlurakutMenuProfileSidebar = ({ githubUser, isMenuOpen }) => {
  return (
    <S.Wrapper isMenuOpen={isMenuOpen}>
      <div>
        <img
          src={`https://github.com/${githubUser}.png`}
          style={{ borderRadius: '8px' }}
        />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
      </div>
    </S.Wrapper>
  );
};

export default AlurakutMenuProfileSidebar;
