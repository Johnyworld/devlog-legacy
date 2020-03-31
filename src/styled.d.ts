import 'styled-components'

declare module 'styled-components' {

    export interface Colors {
        input: string;
        deepest: string;
        deep: string;
        background: string;
        lightest: string;
        lighter: string;
        light: string;
        strong: string;
        strongest: string;
        dayOrNight: string;
        primary: string;
        primary_weak: string;
        highlighter: string;
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