import * as React from 'react';
import { useCallback } from 'react';
import Dropdown, { ListItemProps } from '../../Atoms/Inputs/Dropdown';
import { modeStore } from '../../../store';

const SelectLanguages: React.FC = () => {
    const list = [
        { id: 'ko', text: '🇰🇷Korean' },
        { id: 'en', text: '🇺🇸English' }
    ];

    const onChange = useCallback(({ id, text }: ListItemProps): void => {
        if (id) modeStore.changeLanguage(id);
    }, []);

    return (
        <Dropdown
            list={list}
            long='short'
            defaultValue={modeStore.lang}
            placeholder='Select'
            listFit
            onChange={onChange}
        />
    );
};

export default SelectLanguages;
