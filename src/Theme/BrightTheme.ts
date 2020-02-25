import { DefaultTheme } from 'styled-components';
import { inputNormal, getBoxStyle, getListInBox } from './CommonTheme';

const brightTheme:DefaultTheme = {
    color: {
        background: '#eaeaea',
        clear: '#fff',
        lightest: '#fff',
        lighter: '#ddd',
        light: '#ccc',
        strongest: '#333',
        dayOrNight: '#83aad2',
    },
    inputNormal,
    boxStyle: getBoxStyle(false),
    listInBox: getListInBox(false)
}

export default brightTheme;
