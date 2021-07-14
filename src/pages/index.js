import AlurakutMenu from '../components/AlurakutMenu';
import MainGrid from '../components/MainGrid';
import Box from '../components/Box';
import { ProfileRelationsBoxWrapper } from '../components/ProfileRelations';
import OrkutNostalgicIconSet from '../components/OrkutNostalgicIconSet';

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

function ProfileSidebar({ githubUser }) {
  return (
    <Box>
      <img
        src={`https://github.com/${githubUser}.png`}
        style={{ borderRadius: '8px' }}
      />
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <AlurakutMenu githubUser={usuarioAleatorio} />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo</h1>

            <OrkutNostalgicIconSet {...stats} />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => (
                <li key={itemAtual}>
                  <a href={`/users/${itemAtual}`}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
