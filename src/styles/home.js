import styled, { css } from 'styled-components';

export const ProfileArea = styled.div`
  display: none;
  grid-area: 'profileArea';
  @media (min-width: 860px) {
    display: block;
  }
`;

export const WelcomeArea = styled.div`
  grid-area: 'welcomeArea';
`;

export const ProfileRelationsArea = styled.div`
  grid-area: 'profileRelationsArea';
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 3.2rem;
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xlarge};
    color: ${theme.colors.highContrast};
  `}
`;

export const SmallTitle = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 20px;
    font-size: 2.4rem;
    font-weight: 700;
    color: ${theme.colors.highContrast};
    margin-bottom: 20px;
  `}
`;
