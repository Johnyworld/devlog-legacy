import { DefaultTheme } from 'styled-components';
import { inputNormal, getBoxStyle, getListInBox } from './CommonTheme';

const darkTheme:DefaultTheme = {
    color: {
        background: '#151515',
        clear: '#111',
        lightest: '#333',
        lighter: '#444',
        light: '#555',
        strongest: '#eee',
        dayOrNight: '#1b1c1d',
    },
    inputNormal,
    boxStyle: getBoxStyle(true),
    listInBox: getListInBox(true)
}

export default darkTheme;
