import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    }

    html {
    font-family: Pretendard, sans-serif;
    font-size: 24px;
    color: #464e5e;
    }

    body {
    margin: 0;
    }
`;