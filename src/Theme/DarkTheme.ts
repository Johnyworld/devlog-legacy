import { DefaultTheme } from 'styled-components';
import { inputNormal, getBoxStyle, getListInBox, font } from './CommonTheme';

const darkTheme:DefaultTheme = {
    color: {
        background: '#151515',
        clear: '#222',
        lightest: '#222',
        lighter: '#444',
        light: '#5a5a5a',
        strongest: '#eee',
        dayOrNight: '#1b1c1d',
        primary: '#a541ff',
    },
    font,
    inputNormal,
    boxStyle: getBoxStyle(true),
    listInBox: getListInBox(true)
}

export default darkTheme;
