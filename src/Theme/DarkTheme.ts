import { DefaultTheme } from 'styled-components';

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
    inputNormal: `
        border: none;
        outline: none;
        font-size: 1.4rem;
        font-weight: 600;
        width: 12em;
        line-height: 2.2em;
        padding: 0 1em;
        border-radius: 2em;
    `
}

export default darkTheme;