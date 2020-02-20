import * as React from 'react';
import { modeStore } from '../../../store';
import ToggleButton from '../../Atoms/Buttons/ToggleButton';

/**
 * ### 앱의 테마를 밝은/어두운 모드로 변경합니다.
 *
 * - 버튼을 클릭하면 `isBrightMode` 값을 반전합니다. 
 */
const ThemeModeButton:React.FC = () => {
    const onToggle = () => {
        modeStore.toggleBrightMode();
    }

    return (
        <ToggleButton checked={modeStore.brightMode} onClick={onToggle} />
    );
}

export default ThemeModeButton;
