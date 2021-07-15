import styled from 'styled-components';

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
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 20px;
`;
