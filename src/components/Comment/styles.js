import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 1.6rem;

  & + & {
    margin-top: 1.6rem;
  }
`

export const UserImage = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.border.small};
  `}
`

export const Comment = styled.p`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundElevateOne};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    border-radius: ${theme.border.small};
  `}
`
