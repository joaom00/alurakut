import React from 'react'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'

import AlurakutMenu from '../components/AlurakutMenu'
import MainGrid from '../components/MainGrid'
import Box from '../components/Box'
import ProfileSidebar from '../components/ProfileSidebar'
import ProfileRelations from '../components/ProfileRelations'
import OrkutNostalgicIconSet from '../components/OrkutNostalgicIconSet'
import Tabs from '../components/Tabs'
import TabItem from '../components/TabItem'
import Form from '../components/Form'
import TextField from '../components/TextField'
import Comment from '../components/Comment'

import useAsync from '../hooks/useAsync'

import * as S from '../styles/home'

const stats = {
  recados: 0,
  fotos: 0,
  videos: 0,
  fas: 0,
  mensagens: 0
}

export default function Home({ githubUser }) {
  const followingQuery = useAsync()
  const followersQuery = useAsync()
  const communitiesQuery = useAsync()
  const commentsQuery = useAsync()

  async function handleFollowingQuery() {
    const response = await fetch(
      `https://api.github.com/users/${githubUser}/following?per_page=6`
    )
    const data = await response.json()
    return data
  }

  async function handleFollowersQuery() {
    const response = await fetch(
      `https://api.github.com/users/${githubUser}/followers?per_page=6`
    )
    const data = await response.json()
    return data
  }

  async function handleCommunitiesQuery() {
    const response = await fetch(`https://graphql.datocms.com/`, {
      method: 'POST',
      headers: {
        Authorization: '596b76c3fc528eef74441d4abf6285',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query: `query {
          allCommunities {
            title
            imageUrl
            creatorSlug
          }
        }`
      })
    })

    const { data } = await response.json()
    return data.allCommunities
  }

  async function handleCommentsQuery() {
    const response = await fetch(`https://graphql.datocms.com/`, {
      method: 'POST',
      headers: {
        Authorization: '596b76c3fc528eef74441d4abf6285',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query: `query {
          allComments {
            comment
            user
          }
        }`
      })
    })

    const { data } = await response.json()
    return data.allComments
  }

  async function createCommunity(event) {
    event.preventDefault()
    const { title, image } = event.target

    const newCommunity = {
      title: title.value,
      image_url: image.value,
      creator_slug: 'joaom00'
    }

    await fetch('/api/comunidades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCommunity)
    })

    communitiesQuery.run(handleCommunitiesQuery())
  }

  async function createComment(event) {
    event.preventDefault()
    const { comment } = event.target

    const newComment = {
      comment: comment.value,
      user: 'joaom00'
    }

    await fetch('/api/comentarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComment)
    })

    commentsQuery.run(handleCommentsQuery())
  }

  React.useEffect(() => {
    followingQuery.run(handleFollowingQuery())
  }, [followingQuery.run])

  React.useEffect(() => {
    followersQuery.run(handleFollowersQuery())
  }, [followersQuery.run])

  React.useEffect(() => {
    communitiesQuery.run(handleCommunitiesQuery())
  }, [communitiesQuery.run])

  React.useEffect(() => {
    commentsQuery.run(handleCommentsQuery())
  }, [handleCommentsQuery.run])

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
            <Tabs defaultIndex="1">
              <TabItem index="1" label="Criar comunidade">
                <Form
                  buttonText="Criar comunidade"
                  handleSubmit={createCommunity}
                >
                  <TextField
                    name="title"
                    placeholder="Qual vai ser o nome da sua comunidade?"
                  />
                  <TextField
                    name="image"
                    placeholder="Coloque uma ULR para usarmos de capa"
                  />
                </Form>
              </TabItem>
              <TabItem index="2" label="Escrever comentário">
                <Form
                  buttonText="Enviar comentário"
                  handleSubmit={createComment}
                >
                  <TextField
                    name="comment"
                    placeholder="O que você está pensando hoje?"
                  />
                </Form>
              </TabItem>
            </Tabs>
          </Box>

          <Box>
            <S.SmallTitle>Comentários</S.SmallTitle>
            {commentsQuery.isLoading ? 'Carregando...' : null}
            {commentsQuery.data?.map(({ comment, user }, index) => (
              <Comment key={index} comment={comment} user={user} />
            ))}
          </Box>
        </S.WelcomeArea>
        <S.ProfileRelationsArea className="profileRelationsArea">
          <ProfileRelations title="Seguindo" items={followingQuery} />
          <ProfileRelations title="Seguidores" items={followersQuery} />
          <ProfileRelations title="Comunidades" items={communitiesQuery} />
        </S.ProfileRelationsArea>
      </MainGrid>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN
  const { isAuthenticated } = await fetch('http://localhost:3000/api/auth', {
    headers: {
      Authorization: token
    }
  }).then((resposta) => resposta.json())

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const { sub } = jwt.decode(token)
  return {
    props: {
      githubUser: sub
    }
  }
}
