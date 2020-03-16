import { DefaultTheme } from 'styled-components';
import { inputNormal, getBoxStyle, getListInBox, font } from './CommonTheme';

const brightTheme:DefaultTheme = {
    color: {
        background: '#eaeaea',
        clear: '#fff',
        lightest: '#fff',
        lighter: '#ddd',
        light: '#aaa',
        strongest: '#333',
        dayOrNight: '#83aad2',
        primary: '#a541ff',
    },
    font,
    inputNormal,
    boxStyle: getBoxStyle(false),
    listInBox: getListInBox(false)
}

export default brightTheme;
