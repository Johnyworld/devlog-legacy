import { DefaultTheme } from 'styled-components';
import { inputNormal, getBoxStyle, getListInBox, font } from './CommonTheme';

const brightTheme:DefaultTheme = {
    color: {
        input: '#fff',
        deepest: '#fff',
        deep: '#f4f4f4',
        background: '#eaeaea',
        lightest: '#e1e1e1',
        lighter: '#ddd',
        light: '#aaa',
        strong: '#777',
        strongest: '#333',
        dayOrNight: '#83aad2',
        primary: '#5b58ff',
        primary_weak: '#b7b6e4',
        highlighter: '#c8dbeb',
    },
    font,
    inputNormal,
    boxStyle: getBoxStyle(false),
    listInBox: getListInBox(false)
}

export default brightTheme;
