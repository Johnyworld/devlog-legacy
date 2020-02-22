import * as React from 'react';
import { useCallback } from 'react';
import { modeStore } from '../../../store';
import ThemeToggler from '../../Atoms/Buttons/ThemeToggler';

interface Props {
    className?: string;
}

/**
 * ### 앱의 테마를 밝은/어두운 모드로 변경합니다.
 *
 * - 버튼을 클릭하면 `isDarkMode` 값을 반전합니다.
 */
const ThemeModeButton: React.FC<Props> = ({ className }: Props) => {
    const onChange = useCallback((checked: boolean) => {
        modeStore.toggleDarkMode(checked);
    }, []);

    return (
        <ThemeToggler
            initChecked={!modeStore.darkMode}
            onChange={onChange}
            className={className}
        />
    );
};

export default ThemeModeButton;
