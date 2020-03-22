import * as React from 'react';
import styled, { StyledComponent, DefaultTheme } from 'styled-components';

interface Styles {
    color?: string;
    block?: boolean;
    weight?: 'thin' | 'regular' | 'bold';
}

const Container:StyledComponent<'span', DefaultTheme, Styles, never> = styled.span`
    font-weight: ${(props: Styles)=> (
        props.weight === 'thin' ? `300;` :
        props.weight === 'regular' ? `400;` :
        props.weight === 'bold' ? `700;` : ''
    )};
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

const Text: React.FC<Props> = ({ text, color='inherit', weight='regular', block }:Props) => {
    return (
        <Container color={color} block={block} weight={weight} >{text}</Container>
    );
};

export default Text;