import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    a {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.highContrast};
      margin-bottom: ${theme.spacings.large};
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      img {
        width: ${theme.spacings.large};
        height: ${theme.spacings.large};
        margin-right: 0.5rem;
      }
    }
  `}
`
