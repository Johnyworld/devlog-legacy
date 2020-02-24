import * as React from 'react';
import Menu from '../../../Atoms/Menu/Menu';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

const getGNB = (t: TFunction) => {
    return [
        {
            id: '1',
            content: t('gnb_about'),
            uri: '/about'
        },
        {
            id: '2',
            content: t('gnb_blog'),
            uri: '/blog',
            children: [
                {
                    id: '21',
                    content: t('gnb_development'),
                    uri: '/dev'
                },
                {
                    id: '22',
                    content: t('gnb_book'),
                    uri: '/book'
                },
                {
                    id: '23',
                    content: t('gnb_diary'),
                    uri: '/diary'
                }
            ]
        },
        {
            id: '3',
            content: t('gnb_github'),
            uri: 'https://github.com/Johnyworld'
        }
    ];
};

const Global: React.FC = () => {
    const { t } = useTranslation();
    const list = getGNB(t);
    console.log(list);
    return <Menu list={list} horisontal />;
};

export default Global;
