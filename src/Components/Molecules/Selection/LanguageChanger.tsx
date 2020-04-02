import * as React from 'react';
import { useCallback } from 'react';
import Dropdown from '../../Atoms/Inputs/Dropdown';
import { modeStore } from '../../../store';
import { ListItemProps } from '../../Atoms/Inputs/Dropdown/DropdownTypes';

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
            initValue={modeStore.lang}
            placeholder='Select'
            listFit
            onChange={onChange}
        />
    );
};

export default SelectLanguages;
