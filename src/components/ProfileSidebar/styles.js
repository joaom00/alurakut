import styled, { css } from 'styled-components'
import Box from '../Box'

export const Wrapper = styled(Box)`
  ${({ theme }) => css`
    > a {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  `}
`
