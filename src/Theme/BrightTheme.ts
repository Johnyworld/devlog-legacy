import { DefaultTheme } from 'styled-components';

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

export default brightTheme;