import { TFunction } from 'i18next';

export const getExternalLinkList = (t: TFunction) => [
    {
        id: 'storybook',
        content: t('external_storybook'),
        uri: 'http://johnyworld.com'
    },
    {
        id: 'johnyworld',
        content: t('external_johnyworld'),
        uri: 'http://johnyworld.com'
    },
    {
        id: '2',
        content: t('external_github'),
        uri: 'http://github.com/johnyworld'
    },
    {
        id: '3',
        content: t('external_codepen'),
        uri: 'https://codepen.io/johnyworld'
    }
]