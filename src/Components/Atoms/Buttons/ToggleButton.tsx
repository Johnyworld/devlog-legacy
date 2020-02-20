import * as React from 'react';

interface Props {
    checked: boolean;
    onClick: (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * ### 토글 버튼
 */
const ToggleButton:React.FC<Props> = ({ checked, onClick }: Props) => {
    return (
        <button onClick={onClick}>{ checked ? 'Checked' : 'Unchecked' }</button>
    );
}

ToggleButton.defaultProps = {
    checked: false
}

export default ToggleButton;
