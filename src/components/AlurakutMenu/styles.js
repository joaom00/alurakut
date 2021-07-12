import styled, { css } from 'styled-components';

import config from '../../config';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.backgroundQuinary};

    .container {
      background-color: ${theme.colors.backgroundQuinary};
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

      button {
        border: 0;
        background: transparent;
        align-self: center;
        display: inline-block;
        @media (min-width: 860px) {
          display: none;
        }
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
            background-color: #5292c1;
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
        color: ${theme.colors.backgroundTertiary};
        background: ${theme.colors.anotherElement};
        padding: ${theme.spacings.xsmall} 4.2rem;
        border: 0;
        background-image: url(${`${config.BASE_URL}/icons/search.svg`});
        background-position: 1.5rem center;
        background-repeat: no-repeat;
        border-radius: 1000px;
        font-size: ${theme.font.sizes.xsmall};
        ::placeholder {
          color: ${theme.colors.backgroundTertiary};
          opacity: 1;
        }
      }
    }
  `}
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundTertiary};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    border-radius: 1000px;
    height: 3.4rem;
  `}
`;
