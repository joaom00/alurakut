import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import AlurakutMenu from '../components/AlurakutMenu';
import MainGrid from '../components/MainGrid';
import Box from '../components/Box';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileRelations from '../components/ProfileRelations';
import OrkutNostalgicIconSet from '../components/OrkutNostalgicIconSet';

import * as S from '../styles/home';

const usuarioAleatorio = 'joaom00';
const pessoasFavoritas = [
  'rodrigobranas',
  'willianjusten',
  'kentcdodds',
  'tannerlinsley',
  'tjdevries',
  'leerob',
];

const stats = {
  recados: 101,
  fotos: 102,
  videos: 103,
  fas: 104,
  mensagens: 105,
};

export default function Home() {
  const [title, setTitle] = React.useState('');
  const [image, setImage] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <AlurakutMenu githubUser={usuarioAleatorio} />
      <MainGrid>
        <S.ProfileArea className="profileArea">
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </S.ProfileArea>
        <S.WelcomeArea className="welcomeArea">
          <Box>
            <S.Title>Bem vindo(a)</S.Title>
            <OrkutNostalgicIconSet {...stats} />
          </Box>

          <Box>
            <h2>O que você deseja fazer?</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  name="title"
                  type="text"
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>

              <div>
                <input
                  name="image"
                  type="text"
                  value={image}
                  onChange={({ target }) => setImage(target.value)}
                  placeholder="Coloque uma ULR para usarmos de capa"
                  aria-label="Coloque uma ULR para usarmos de capa"
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </S.WelcomeArea>
        <S.ProfileRelationsArea className="profileRelationsArea">
          <ProfileRelations
            title="Pessoas da comunidade"
            array={pessoasFavoritas}
          />
        </S.ProfileRelationsArea>
      </MainGrid>
    </>
  );
}
