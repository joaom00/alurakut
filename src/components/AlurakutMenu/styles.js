import styled, { css } from 'styled-components'

import config from '../../config'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.backgroundElevateThree};

    .container {
      background-color: ${theme.colors.backgroundElevateThree};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
      max-width: ${theme.grid.container};
      margin: auto;
      display: flex;
      justify-content: space-between;
      position: relative;
      z-index: 101;
      @media (min-width: 860px) {
        justify-content: flex-start;
      }

      nav {
        display: none;
        @media (min-width: 860px) {
          display: flex;
        }
        a {
          font-size: ${theme.font.sizes.xsmall};
          color: white;
          padding: ${theme.spacings.xsmall} ${theme.spacings.large};
          position: relative;
          text-decoration: none;
          &:after {
            content: ' ';
            background-color: ${theme.colors.lowContrast};
            display: block;
            position: absolute;
            width: 1px;
            height: ${theme.spacings.small};
            margin: auto;
            left: 0;
            top: 0;
            bottom: 0;
          }
        }
      }
      input {
        color: ${theme.colors.highContrast};
        background: ${theme.colors.backgroundElevateTwo};
        padding: ${theme.spacings.xsmall} 4.2rem;
        border: 0;
        background-image: url(${`${config.BASE_URL}/icons/search.svg`});
        background-position: 1.5rem center;
        background-repeat: no-repeat;
        border-radius: 1000px;
        font-size: ${theme.font.sizes.xsmall};
        ::placeholder {
          color: ${theme.colors.highContrast};
          opacity: 1;
        }
      }
    }
  `}
`

export const MenuButton = styled.button`
  ${({ theme }) => css`
    border: 0;
    background: transparent;
    align-self: center;
    display: inline-block;
    @media (min-width: 860px) {
      display: none;
    }
  `}
`

export const Logo = styled.img`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundTertiary};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    border-radius: 1000px;
    height: 3.4rem;
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    display: block;
    background: none;
    border: 0;
    color: ${theme.colors.highContrast};
    margin-right: ${theme.spacings.small};
  `}
`
