import styled, { css } from 'styled-components'

export const TabButtonsWrapper = styled.div``

const tabViewModifiers = {
  selected: () => css`
    display: block;
  `
}

export const TabViewWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
  `}
`

export const TabView = styled.div`
  ${({ theme, isSelected }) => css`
    display: none;

    ${isSelected && tabViewModifiers.selected};
  `}
`
