import * as React from 'react';
import styled, { StyledComponent, DefaultTheme, Colors, Fonts } from 'styled-components';

interface Styles {
    /** color 값이 아닌 theme.color 에 있는 key 값을 받습니다. */
    color?: keyof Colors;
    size?: keyof Fonts;
    line?: boolean;
}

const Container:StyledComponent<'p', DefaultTheme, Styles, never> = styled.p`
    color: ${(props: any)=> props.color && props.theme.color[props.color]};
    font-size: ${(props: any)=> props.size && props.theme.font[props.size]};
    font-weight: 700;
    margin-bottom: 1em;
    ${(props: Styles) => props.line 
        ? `
            border-bottom: 1px solid;
            padding-bottom: .3em;
        ` : ''
    };
`;

interface Props extends Styles {
    text: string;
}

const Title: React.FC<Props> = ({ text, color='primary', size='large', line }:Props) => {
    return (
        <Container color={color} line={line} size={size} >{text}</Container>
    );
};

export default Title;