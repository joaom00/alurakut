import React from 'react'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'

import Button from '../components/Button'

import * as S from '../styles/login'

export default function LoginScreen() {
  const router = useRouter()

  async function handleGetUserData(githubUser) {
    const token = jwt.sign({}, 'secret', {
      subject: githubUser,
      expiresIn: '1d'
    })
    const response = await fetch('http://localhost:3000/api/auth', {
      headers: {
        Authorization: token
      }
    })
    const data = await response.json()
    if (data.isAuthenticated) {
      setCookie(null, 'USER_TOKEN', data.token)
      router.push('/')
    } else {
      // TODO: Mandar notificação
      console.error('Usuário inválido')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const { username } = event.target
    handleGetUserData(username.value)
  }

  return (
    <S.Wrapper>
      <S.LoginScreen>
        <S.LogoArea>
          <img src="https://alurakut.vercel.app/logo.svg" alt="" />
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
            <S.Input placeholder="Usuário" name="username" />
            <Button fullWidth type="submit">
              Login
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
