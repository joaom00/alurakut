import styled, { css } from "styled-components";

export const TabButton = styled.button`
  ${({ theme }) => css`
    border: 0;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    color: ${theme.colors.accent};
    border-radius: ${theme.border.small};
    background-color: ${theme.colors.backgroundElevateOne};

    & + & {
      margin-left: ${theme.spacings.large};
    }
  `}
`;

const tabViewModifiers = {
  selected: () => css`
    display: block;
  `
};

export const TabViewWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
  `}
`;

export const TabView = styled.div`
  ${({ theme, isSelected }) => css`
    display: none;

    ${isSelected && tabViewModifiers.selected};
  `}
`;
