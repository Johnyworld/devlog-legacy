import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import { ContainerProps } from './ThemeTogglerTypes';

export const Container: StyledComponent<'div', DefaultTheme, ContainerProps, never> = styled.div`
    display: block;
    font-size: 1rem;
    width: 4.4em;
    height: 2.4em;
    border: none;
    padding: 0.2em;
    border-radius: 2em;
    outline: none;
    transition: 0.3s;
    cursor: pointer;
    ${(props: ContainerProps) =>
        props.checked
            ? `
        background-color: #83aad2;
        `
            : `
        background-color: #000;
        `};
`;

export const Selector: StyledComponent<'div', DefaultTheme, ContainerProps, never> = styled.div`
    margin: 0 auto;
    width: 2em;
    height: 2em;
    border-radius: 1em;
    background-color: ${props => props.theme.color.lightest};
    transition: 0.3s;
    ${(props: ContainerProps) =>
        props.checked
            ? `
        transform: translateX(-1em);
        `
            : `
        transform: translateX(1em);
        `};
`;