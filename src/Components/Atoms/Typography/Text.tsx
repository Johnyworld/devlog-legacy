import * as React from 'react';
import styled, { StyledComponent, DefaultTheme, Colors, Fonts } from 'styled-components';

interface Styles {
    /** color 값이 아닌 theme.color 에 있는 key 값을 받습니다. */
    color?: keyof Colors;
    size?: keyof Fonts;
    block?: boolean;
    weight?: 'thin' | 'regular' | 'bold';
}

const Container:StyledComponent<'span', DefaultTheme, Styles, never> = styled.span`
    color: ${(props: any)=> props.color && props.theme.color[props.color]};
    font-size: ${(props: any)=> props.size && props.theme.font[props.size]};
    font-weight: ${(props: Styles)=> (
        props.weight === 'thin' ? `300;` :
        props.weight === 'regular' ? `400;` :
        props.weight === 'bold' ? `700;` : ''
    )};
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

const Text: React.FC<Props> = ({ text, color='strongest', size='regular', weight='regular', block }:Props) => {
    return (
        <Container color={color} size={size} block={block} weight={weight} >{text}</Container>
    );
};

export default Text;