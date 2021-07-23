import styled, { css } from "styled-components";

const Box = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.backgroundElevateThree};
    border-radius: 8px;

    padding: 16px;

    /* CSS Pré-Pronto */
    margin-bottom: 10px;
    .boxLink {
      font-size: 14px;
      color: #2e7bb4;
      text-decoration: none;
      font-weight: 800;
    }
    .subTitle {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 20px;
    }
    hr {
      margin-top: 12px;
      margin-bottom: 8px;
      border-color: transparent;
      border-bottom-color: #ecf2fa;
    }
    input {
      width: 100%;
      background-color: #f4f4f4;
      color: ${theme.colors.background};
      border: 0;
      padding: 14px 16px;
      margin-bottom: 14px;
      border-radius: 10000px;
      ::placeholder {
        color: #333333;
        opacity: 1;
      }
    }
  `}
`;

export default Box;
