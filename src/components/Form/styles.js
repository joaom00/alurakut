import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    border: 0;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    color: ${theme.colors.highContrast};
    border-radius: ${theme.border.small};
    background-color: ${theme.colors.accent};
  `}
`;
