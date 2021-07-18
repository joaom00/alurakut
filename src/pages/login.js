import React from 'react'
// import nookies from 'nookies'
// import { useRouter } from 'next/router'
import useAsync from '../hooks/useAsync'

import Button from '../components/Button'

import * as S from '../styles/login'

export default function LoginScreen() {
  const [githubUser, setGithubUser] = React.useState('')
  // const router = useRouter()
  const { data, run, isFetching } = useAsync(handleGetUserData, {
    enabled: false
  })

  async function handleGetUserData() {
    const response = await fetch(`https://github.com/${githubUser}`)
    return response
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    setGithubUser(form.user.value)
    run()
  }

  // const { data, isFetching, run } = useAsync(
  //   'https://alurakut.vercel.app/api/login',
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ githubUser })
  //   },
  //   false
  // )

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const form = event.target
  //   setGithubUser(form.user.value)
  //   fetch('https://alurakut.vercel.app/api/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ githubUser })
  //   }).then(async (respostaDoServer) => {
  //     const dadosDaResposta = await respostaDoServer.json()
  //     const token = dadosDaResposta.token
  //     nookies.set(null, 'USER_TOKEN', token, {
  //       path: '/',
  //       maxAge: 86400 * 7
  //     })
  //     router.push('/')
  //   })
  // }

  return (
    <S.Wrapper>
      <S.LoginScreen>
        <S.LogoArea>
          <img src="https://alurakut.vercel.app/logo.svg" alt="" />
          {data}
          <S.Paragraph>
            <S.Strong>Conecte-se</S.Strong> aos seus amigos e familiares usando
            recados e mensagens instantâneas
          </S.Paragraph>
          <S.Paragraph>
            <S.Strong>Conheça</S.Strong> novas pessoas através de amigos de seus
            amigos e comunidades
          </S.Paragraph>
          <S.Paragraph>
            <S.Strong>Compartilhe</S.Strong> seus vídeos, fotos e paixões em um
            só lugar
          </S.Paragraph>
        </S.LogoArea>

        <S.FormAreaWrapper>
          <S.FormAreaBox as="form" onSubmit={handleSubmit}>
            <S.Paragraph>
              Acesse agora mesmo com seu usuário do <S.Strong>GitHub</S.Strong>!
            </S.Paragraph>
            <S.Input placeholder="Usuário" name="user" />
            <Button fullWidth type="submit">
              {isFetching ? 'Carregando...' : 'Login'}
            </Button>
          </S.FormAreaBox>

          <S.FormAreaBox as="footer">
            <S.Paragraph>
              Ainda não é membro? <br />
              <a href="/login">
                <S.Strong>ENTRAR JÁ</S.Strong>
              </a>
            </S.Paragraph>
          </S.FormAreaBox>
        </S.FormAreaWrapper>

        <S.FooterArea>
          <S.Paragraph>
            © 2021 alura.com.br - <S.Link href="/">Sobre o Orkut.br</S.Link> -{' '}
            <S.Link href="/">Centro de segurança</S.Link> -{' '}
            <S.Link href="/">Privacidade</S.Link> -{' '}
            <S.Link href="/">Termos</S.Link> - <S.Link href="/">Contato</S.Link>
          </S.Paragraph>
        </S.FooterArea>
      </S.LoginScreen>
    </S.Wrapper>
  )
}
