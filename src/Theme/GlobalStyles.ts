import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    ${reset}

    html {
        font-size: 10px;
        font-family: sans-serif;
    }

    body {
        font-size: 1.6rem;
    }

    * {
        box-sizing: border-box;
    }

    li {
        list-style-type: none;
    }

    body {
        color: ${props=> props.theme.color.strongest};
        background-color: ${props=> props.theme.color.background};
        transition: .2s;
    }
`;

export default GlobalStyles;