import * as React from 'react';
import styled from 'styled-components';

const Container = styled.button`

`;

interface Props {
    size?: 'small' | 'medium' | 'large';
    text?: string;

    /** width를 100%로 고정 */
    fluid?: boolean;
    disabled?: boolean;
    primary?: boolean;

    /** 테두리와 버튼 글자만 보이는 투명한 버튼 */
    line?: boolean;
    onClick: (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button:React.FC<Props> = ({ size, text, fluid, disabled, primary, line, onClick }: Props) => {
    return (
        <Container onClick={onClick}>
            {text}
        </Container>
    )
}

Button.defaultProps = {
    size: 'medium',
    text: 'Button',
    fluid: false,
    disabled: false,
    primary: false,
    line: false
}

export default Button;