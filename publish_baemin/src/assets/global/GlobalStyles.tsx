import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    html{
        overflow-x: hidden;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.4px;
        color: rgb(33,35,41);
        min-width: 320px;
        font-family: '"Web Noto Sans KR", sans-serif, 돋움, Dotum, helvetica';
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        margin: 0px;
        padding: 0px;
        box-sizing:border-box;
    }
    body{
        background-color:#ffffff;
    }

`;

export default GlobalStyles;