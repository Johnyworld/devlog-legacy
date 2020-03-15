import * as React from 'react';
import Menu from '../../../Atoms/Menu/Menu';
import { useTranslation } from 'react-i18next';
import { getGNB } from '../../../../Data/GNB';

const Global: React.FC = () => {
    const { t } = useTranslation();
    const list = getGNB(t);
    console.log(list);
    return <Menu list={list} horisontal />;
};

export default Global;
