import 'styled-components'

declare module 'styled-components' {

    export interface Colors {
        background: string;
        clear: string;
        lightest: string;
        lighter: string;
        light: string;
        strongest: string;
        dayOrNight: string;
        primary: string;
    }

    export interface Fonts {
        small: string;
        regular: string;
        large: string;
        title: string;
    }

    export interface DefaultTheme {
        color: Colors,
        font: Fonts,
        inputNormal: string;
        boxStyle: string;
        listInBox: string;
    }
}