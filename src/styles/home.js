import styled, { css } from "styled-components";

export const ProfileArea = styled.div`
  display: none;
  grid-area: "profileArea";
  @media (min-width: 860px) {
    display: block;
  }
`;

export const WelcomeArea = styled.div`
  grid-area: "welcomeArea";
`;

export const ProfileRelationsArea = styled.div`
  grid-area: "profileRelationsArea";
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
    margin-bottom: ${theme.spacings.xlarge};
    font-size: 1.8rem;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.highContrast};
  `}
`;
