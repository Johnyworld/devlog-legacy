import { TFunction } from 'i18next';

export const getGNB = (t: TFunction) => {
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
        },
        {
            id: '3',
            content: t('gnb_work'),
            uri: '/work'
        },
        {
            id: '4',
            content: t('gnb_book'),
            uri: '/book'
        },
        {
            id: '5',
            content: t('gnb_github'),
            uri: 'https://github.com/Johnyworld'
        }
    ];
};