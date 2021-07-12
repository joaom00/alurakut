import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme, isMenuOpen }) => css`
    background: white;
    position: fixed;
    z-index: 100;
    padding: 4.6rem;
    bottom: 0;
    left: 0;
    right: 0;
    top: 4.8rem;
    transition: 0.3s;
    pointer-events: ${isMenuOpen ? 'all' : 'none'};
    opacity: ${isMenuOpen ? '1' : '0'};
    transform: ${isMenuOpen
      ? 'translateY(0)'
      : 'translateY(calc(-100% - 48px))'};
    @media (min-width: 860px) {
      display: none;
    }
    > div {
      max-width: 40rem;
      margin: auto;
    }
    a {
      font-size: ${theme.font.sizes.large};
    }
    .boxLink {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.colorPrimary};
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: ${theme.font.bold};
    }

    hr {
      margin-top: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.xxsmall};
      border-color: transparent;
      border-bottom-color: #ecf2fa;
    }
  `}
`;
