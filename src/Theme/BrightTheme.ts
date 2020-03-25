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
        primary: '#a541ff',
        primary_weak: '#9dbfe1',
        highlighter: '#c8dbeb',
    },
    font,
    inputNormal,
    boxStyle: getBoxStyle(false),
    listInBox: getListInBox(false)
}

export default brightTheme;
