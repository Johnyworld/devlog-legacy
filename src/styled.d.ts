import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            background: string;
            clear: string;
            lightest: string;
            lighter: string;
            light: string;
            strongest: string;
            dayOrNight: string;
        }
    }
}