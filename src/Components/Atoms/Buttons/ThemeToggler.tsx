import * as React from 'react';
import { useState } from 'react';
import styled, { DefaultTheme, StyledComponent } from 'styled-components';

interface ContainerProps {
    checked: boolean;
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
        props.checked
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
        props.checked
            ? `
        transform: translateX(-1em);
        `
            : `
        transform: translateX(1em);
        `};
`;

interface Props {
    className?: string;
    initChecked: boolean;
    /** Check를 바꿀 때 마다 onChange로 들어오는 함수에 boolean값을 전달합니다. */
    onChange: (checked: boolean) => void;
}

/**
 * ### 테마를 변경하는 버튼입니다.
 *
 * - `Dark`모드와 `Bright` 모드가 토글됩니다.
 */
const ThemeToggler: React.FC<Props> = ({ className, initChecked, onChange }) => {
    const [checked, setChecked] = useState(initChecked);

    const onToggle = () => {
        setChecked(!checked);
        onChange(!checked);
    };

    return (
        <Container className={className} onClick={onToggle} checked={checked}>
            <Selector checked={checked} />
        </Container>
    );
};

ThemeToggler.defaultProps = {
    initChecked: true
};

export default ThemeToggler;
