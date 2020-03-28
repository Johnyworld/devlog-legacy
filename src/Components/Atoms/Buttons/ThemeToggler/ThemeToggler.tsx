import * as React from 'react';
import { useState } from 'react';
import { Props } from './ThemeTogglerTypes';
import { Container, Selector } from './ThemeTogglerStyles';

/**
 * ### 테마를 변경하는 버튼입니다.
 *
 * - `Dark`모드와 `Bright` 모드가 토글됩니다.
 */
const ThemeToggler: React.FC<Props> = ({ className, initChecked, onChange }) => {
    const [checked, setChecked] = useState(initChecked);

    const onToggle = () => {
        setChecked(!checked);
        onChange(!checked);
    };

    return (
        <Container className={className} onClick={onToggle} checked={checked}>
            <Selector checked={checked} />
        </Container>
    );
};

ThemeToggler.defaultProps = {
    initChecked: true
};

export default ThemeToggler;
