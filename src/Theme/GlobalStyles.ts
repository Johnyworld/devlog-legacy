import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    ${reset}

    html {
        font-size: 10px;
    }

    body {
        font-size: 1.6rem;
    }

    * {
        box-sizing: border-box;
    }

    body {
        color: ${props=> props.theme.color.strongest};
        background-color: ${props=> props.theme.color.background};
        transition: .2s;
    }
`;

export default GlobalStyles;