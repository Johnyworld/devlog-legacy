import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import { widthProps } from './DropdownTypes';

export const Container = styled.div`
    position: relative;
`;

export const InputWrapper: StyledComponent<'div', DefaultTheme, widthProps, never> = styled.div`
    position: relative;
    display: inline-block;
    ${(props: widthProps) => props.fluid && `width: 100%;`};
`;

export const Input: StyledComponent<'input', DefaultTheme, widthProps, never> = styled.input`
    ${props=> props.theme.inputNormal}
    color: ${props=> props.theme.color.strongest};
    background-color: ${props => props.theme.color.input};
    width: ${(props: widthProps) =>
        props.fluid
            ? `100%`
            : props.long === 'short'
            ? `9em;`
            : props.long === 'middle'
            ? `12em;`
            : props.long === 'long'
            ? `16em;`
            : null};
    cursor: pointer;
`;

export const ClearButton = styled.button`
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    width: 1.2em;
    height: 1.2em;
    font-size: 1.4rem;
    border: none;
    border-radius: 0.6em;
    background: ${props=> props.theme.color.light};
    outline: none;
    cursor: pointer;
`;

export const ListContainer = styled.ul`
    ${props=> props.theme.boxStyle};
    position: absolute;
    top: 3em;
    font-size: 1.4rem;
`;

export const ListItem: StyledComponent<'li', DefaultTheme, widthProps, never> = styled.li`
    ${props=> props.theme.listInBox}
    width: ${(props: widthProps) =>
        props.fluid
            ? `100%`
            : !props.listFit
            ? `auto;`
            : props.long === 'short'
            ? `9em;`
            : props.long === 'middle'
            ? `12em;`
            : props.long === 'long'
            ? `16em;`
            : null};
`;