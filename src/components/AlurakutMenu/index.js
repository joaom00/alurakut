import React from 'react'
import NextLink from 'next/link'
import nookies from 'nookies'

import config from '../../config'

import AlurakutMenuProfileSidebar from '../AlurakutMenuProfileSidebar'

import * as S from './styles'

const v = '1'
const menuItems = [
  { name: 'Inicio', slug: '/' },
  { name: 'Amigos', slug: '/amigos' },
  { name: 'Comunidades', slug: '/comunidades' }
]

function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

function handleLogout(event) {
  event.preventDefault()
  nookies.destroy('USER_TOKEN')
}

const AlurakutMenu = ({ githubUser }) => {
  const [isMenuOpen, setMenuState] = React.useState(false)
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
          <S.Button onClick={handleLogout}>Sair</S.Button>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <S.MenuButton onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && (
            <img src={`${config.BASE_URL}/icons/menu-open.svg?v=${v}`} alt="" />
          )}
          {!isMenuOpen && (
            <img
              src={`${config.BASE_URL}/icons/menu-closed.svg?v=${v}`}
              alt=""
            />
          )}
        </S.MenuButton>
      </div>
      <AlurakutMenuProfileSidebar
        githubUser={githubUser}
        isMenuOpen={isMenuOpen}
      />
    </S.Wrapper>
  )
}

export default AlurakutMenu
