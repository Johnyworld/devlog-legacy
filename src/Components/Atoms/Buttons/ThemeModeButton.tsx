import * as React from 'react';

interface Props {
    isBrightMode: boolean;
    onChange: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const ThemeModeButton:React.FC<Props> = ({ isBrightMode, onChange }) => {
    return (
        <button onClick={onChange}>{ isBrightMode ? 'Bright mode' : 'Dark mode' }</button>
    )
}

export default ThemeModeButton;