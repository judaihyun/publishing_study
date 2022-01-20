import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    /* ${reset}; */
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:'Nanum Barun Gothic';
        font-size:12px;
        background-color:#ffffff;
        letter-spacing: 0;
        line-height: 18px;
        color:#555555;
    }
`;

export default GlobalStyles;