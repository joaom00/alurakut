import React from 'react'
import AlurakutMenu from '../components/AlurakutMenu'
import MainGrid from '../components/MainGrid'
import Box from '../components/Box'
import ProfileSidebar from '../components/ProfileSidebar'
import ProfileRelations from '../components/ProfileRelations'
import OrkutNostalgicIconSet from '../components/OrkutNostalgicIconSet'
import Tabs from '../components/Tabs'

import * as S from '../styles/home'

const githubUser = 'joaom00'

const stats = {
  recados: 0,
  fotos: 0,
  videos: 0,
  fas: 0,
  mensagens: 0
}

export default function Home() {
  const [following, setFollowing] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.github.com/users/joaom00/following?per_page=6').then(
      async (response) => {
        const data = await response.json()
        setFollowing(data)
      }
    )
  }, [])

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <S.ProfileArea className="profileArea">
          <ProfileSidebar githubUser={githubUser} />
        </S.ProfileArea>
        <S.WelcomeArea className="welcomeArea">
          <Box>
            <S.Title>Bem vindo(a)</S.Title>
            <OrkutNostalgicIconSet {...stats} />
          </Box>

          <Box>
            <S.SmallTitle>O que você deseja fazer?</S.SmallTitle>
            <Tabs></Tabs>
            {/* <form onSubmit={handleSubmit}>
              <div>
                <input
                  name="title"
                  type="text"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>

              <div>
                <input
                  name="image"
                  type="text"
                  placeholder="Coloque uma ULR para usarmos de capa"
                  aria-label="Coloque uma ULR para usarmos de capa"
                />
              </div>

              <button>Criar comunidade</button>
            </form> */}
          </Box>
        </S.WelcomeArea>
        <S.ProfileRelationsArea className="profileRelationsArea">
          <ProfileRelations title="Pessoas da comunidade" items={following} />
        </S.ProfileRelationsArea>
      </MainGrid>
    </>
  )
}
