import * as React from 'react';
import { modeStore } from '../../../store';
import ThemeToggler from '../../Atoms/Buttons/ThemeToggler';

interface Props {
    className?: string;
}

/**
 * ### 앱의 테마를 밝은/어두운 모드로 변경합니다.
 *
 * - 버튼을 클릭하면 `isBrightMode` 값을 반전합니다. 
 */
const ThemeModeButton:React.FC<Props> = ({ className }:Props) => {
    const onToggle = () => {
        modeStore.toggleBrightMode();
    }

    return (
        <ThemeToggler isBrightMode={modeStore.brightMode} onClick={onToggle} className={className} />
    );
}

export default ThemeModeButton;
