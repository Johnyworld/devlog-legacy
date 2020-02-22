const { observable } = require('mobx');

type Languages = 'ko' | 'en';

const modeStore = observable({
    darkMode: localStorage.getItem('darkMode') || false,
    lang: localStorage.getItem('lang') || window.navigator.language.substr(0, 2),
    changeLanguage(lang: Languages) {
        if (lang) {
            this.lang = lang;
            localStorage.setItem('lang', lang);
        }
    },
    toggleDarkMode(checked: boolean) {
        if (checked) {
            this.darkMode = false;
            localStorage.removeItem('darkMode');
        } else {
            this.darkMode = true;
            localStorage.setItem('darkMode', 'true');
        }
    }
});

export { modeStore };
