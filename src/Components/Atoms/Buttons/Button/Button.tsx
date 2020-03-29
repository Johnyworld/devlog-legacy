import * as React from 'react';
import { Props } from './ButtonTypes';

const Button:React.FC<Props> = ({ size, text, fluid, disabled, primary, line, onClick }: Props) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    size: 'medium',
    text: 'Button',
    fluid: false,
    disabled: false,
    primary: false,
    line: false
};

export default Button;
