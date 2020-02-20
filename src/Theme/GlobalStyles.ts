import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    ${reset}

    body {
        color: ${props=> props.theme.color.normalFont};
        background-color: ${props=> props.theme.color.background};
        transition: .2s;
    }
`;

export default GlobalStyles;