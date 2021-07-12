import React from 'react';
import NextLink from 'next/link';
import config from '../../config';

import AlurakutMenuProfileSidebar from '../AlurakutMenuProfileSidebar';

import * as S from './styles';

const v = '1';
const menuItems = [
  { name: 'Inicio', slug: '/' },
  { name: 'Amigos', slug: '/amigos' },
  { name: 'Comunidades', slug: '/comunidades' },
];

function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>
    </NextLink>
  );
}

const AlurakutMenu = ({ githubUser }) => {
  const [isMenuOpen, setMenuState] = React.useState(false);
  return (
    <S.Wrapper>
      <div className="container">
        <S.Logo src={`${config.BASE_URL}/logo.svg`} />

        <nav style={{ flex: 1 }}>
          {menuItems.map((menuItem) => (
            <Link
              key={`key__${menuItem.name.toLocaleLowerCase()}`}
              href={`${menuItem.slug.toLocaleLowerCase()}`}
            >
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href={`/logout`}>Sair</a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && (
            <img src={`${config.BASE_URL}/icons/menu-open.svg?v=${v}`} />
          )}
          {!isMenuOpen && (
            <img src={`${config.BASE_URL}/icons/menu-closed.svg?v=${v}`} />
          )}
        </button>
      </div>
      <AlurakutMenuProfileSidebar
        githubUser={githubUser}
        isMenuOpen={isMenuOpen}
      />
    </S.Wrapper>
  );
};

export default AlurakutMenu;
