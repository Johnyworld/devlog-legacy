import * as React from 'react';
import styled, { StyledComponent, DefaultTheme } from 'styled-components';

interface Styles {
    color?: string;
    block?: boolean;
}

const Container:StyledComponent<'span', DefaultTheme, Styles, never> = styled.span`
    color: ${(props: Styles)=> props.color};
    ${(props: Styles) => props.block 
        ? `
            display: block;
            margin-bottom: 10px;
        ` : ''
    };
`;

interface Props extends Styles {
    text: string;
}

const RegularFont: React.FC<Props> = ({ text, color='inherit', block }:Props) => {
    return (
        <Container color={color} block={block} >{text}</Container>
    );
};

export default RegularFont;