import styled, { css } from 'styled-components'

import { Wrapper as FormWrapper } from '../Form/styles'
import { TabButtonsWrapper } from '../Tabs/styles'
import { FormArea } from '../../styles/login'

const wrapperModifiers = {
  fullWidth: (theme) => css`
    width: 100%;
    padding: ${theme.spacings.small};
  `
}

const Button = styled.button`
  ${({ theme, fullWidth }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    border-radius: ${theme.border.small};
    transition: 0.2s;

    & + & {
      margin-left: ${theme.spacings.large};
    }

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    ${TabButtonsWrapper} & {
      background-color: ${theme.colors.backgroundElevateOne};
      color: ${theme.colors.accent};
    }

    ${FormWrapper} & {
      background-color: ${theme.colors.accent};
      color: ${theme.colors.highContrast};
    }

    ${FormArea} & {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.highContrast};
    }

    ${fullWidth && wrapperModifiers.fullWidth(theme)}
  `}
`

export default Button
