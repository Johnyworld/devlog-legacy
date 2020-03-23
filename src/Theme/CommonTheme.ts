export const inputNormal = `
    border: none;
    outline: none;
    font-size: 1.4rem;
    font-weight: 600;
    width: 12em;
    line-height: 2.2em;
    padding: 0 1em;
    border-radius: 2em;
`;

export const getBoxStyle = (isDarkMode:boolean) => `
    overflow: hidden;
    border-radius: 1em;
    box-shadow: 0 0.3em 0.3em rgba(0, 0, 0, 0.05);
    background: ${isDarkMode ? '#333' : '#fff' }
`;

export const getListInBox = (isDarkMode:boolean) => `
    padding: 0.8em 1em;
    cursor: pointer;
    transition: 0.3s;
    &:not(:last-child) {
        border-bottom: 1px solid ${isDarkMode ? '#444' : '#ddd'};
    }
    &:hover {
        background-color: ${isDarkMode ? '#444' : '#ddd'};
    }
`

export const font = {
    small: '12px',
    regular: '14px',
    medium: '16px',
    large: '24px',
    title: '48px',
}