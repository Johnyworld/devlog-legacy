import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    ${reset}

    body {
        color: ${props=> props.theme.color.normalFont};
        background-color: ${props=> props.theme.color.background};
    }
`;

export default GlobalStyles;