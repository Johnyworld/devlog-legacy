import { DefaultTheme } from 'styled-components';
import { inputNormal, getBoxStyle, getListInBox, font } from './CommonTheme';

const darkTheme:DefaultTheme = {
    color: {
        input: '#222',
        deepest: '#000',
        deep: '#0a0a0a',
        background: '#151515',
        lightest: '#1a1a1a',
        lighter: '#444',
        light: '#5a5a5a',
        strong: '#bbb',
        strongest: '#eee',
        dayOrNight: '#1b1c1d',
        primary: '#5b58ff',
        primary_weak: '#3c3c5f',
        highlighter: '#212c3e',
    },
    font,
    inputNormal,
    boxStyle: getBoxStyle(true),
    listInBox: getListInBox(true)
}

export default darkTheme;
