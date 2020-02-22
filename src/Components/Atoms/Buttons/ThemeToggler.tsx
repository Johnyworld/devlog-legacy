import * as React from 'react';
import styled, { DefaultTheme, StyledComponent } from 'styled-components';

interface ContainerProps {
    isBrightMode: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Container: StyledComponent<'div', DefaultTheme, ContainerProps, never> = styled.div`
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
        props.isBrightMode
            ? `
        background-color: #83aad2;
        `
            : `
        background-color: #000;
        `};
`;

const Selector: StyledComponent<'div', DefaultTheme, ContainerProps, never> = styled.div`
    margin: 0 auto;
    width: 2em;
    height: 2em;
    border-radius: 1em;
    background-color: ${props => props.theme.color.lightest};
    transition: 0.3s;
    ${(props: ContainerProps) =>
        props.isBrightMode
            ? `
        transform: translateX(-1em);
        `
            : `
        transform: translateX(1em);
        `};
`;

interface Props {
    className?: string;
    isBrightMode: boolean;
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

/**
 * ### 테마를 변경하는 버튼입니다.
 *
 * - `Dark`모드와 `Bright` 모드가 토글됩니다.
 */
const ThemeToggler: React.FC<Props> = ({ className, isBrightMode, onClick }) => {
    return (
        <Container className={className} onClick={onClick} isBrightMode={isBrightMode}>
            <Selector isBrightMode={isBrightMode} />
            {/* <button onClick={onClick}>{ checked ? 'Checked' : 'Unchecked' }</button> */}
        </Container>
    );
};

ThemeToggler.defaultProps = {
    isBrightMode: true
};

export default ThemeToggler;
