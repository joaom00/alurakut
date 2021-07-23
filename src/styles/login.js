import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginScreen = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    max-width: ${theme.grid.container};
    display: grid;
    grid-gap: ${theme.spacings.small};
    grid-template-areas:
      'logoArea'
      'formArea'
      'footerArea';
    @media (min-width: 860px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas:
        'logoArea formArea'
        'logoArea formArea'
        'footerArea footerArea';
    }
  `}
`

export const LogoArea = styled.section`
  ${({ theme }) => css`
    grid-area: logoArea;
    background-color: ${theme.colors.backgroundElevateThree};
    border-radius: ${theme.border.small};
    padding: ${theme.spacings.large};
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 26.3rem;
    @media (min-width: 860px) {
      min-height: 36.8rem;
    }
    img {
      max-height: 4.5rem;
      margin-bottom: 3.6rem;
    }
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 1.2;
    color: ${theme.colors.highContrast};
    & + & {
      margin-top: ${theme.spacings.small};
    }
  `}
`

export const Strong = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.accent};
  `}
`

export const FormAreaWrapper = styled.section`
  ${({ theme }) => css`
    grid-area: formArea;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    & ${Paragraph} {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export const FormAreaBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: ${theme.spacings.large};
    padding-left: 5rem;
    padding-right: 5rem;
    background-color: ${theme.colors.backgroundElevateThree};
    border-radius: ${theme.border.small};
    flex: 1;
    &:not(:last-child) {
      margin-bottom: ${theme.spacings.small};
    }
    &:first-child {
      min-height: 22.4rem;
      @media (min-width: 860px) {
        min-height: 28.2rem;
      }
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    display: block;
    border: 1px solid ${theme.colors.accent};
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.backgroundElevateOne};
    border-radius: ${theme.border.small};
    margin-top: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.large};
    color: ${theme.colors.highContrast};
  `}
`

export const FooterArea = styled.footer`
  ${({ theme }) => css`
    grid-area: footerArea;
    background-color: ${theme.colors.backgroundElevateThree};
    border-radius: ${theme.border.small};
    padding: ${theme.spacings.xxsmall};

    ${Paragraph} {
      text-align: center;
    }
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
  `}
`

export const FormFooter = styled.footer`
  ${({ theme }) => css``}
`
