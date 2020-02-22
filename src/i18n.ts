import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tranEn from './Locale/en';
import tranKo from './Locale/ko';

const resources = {
    en: { translation: tranEn },
    ko: { translation: tranKo }
};

const userLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('lang') || userLanguage.substr(0, 2),
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
