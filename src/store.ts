const { observable } = require('mobx');

type Languages = 'ko' | 'en';

const modeStore = observable({
    brightMode: localStorage.getItem('brightMode') || false,
    lang: localStorage.getItem('lang') || window.navigator.language.substr(0, 2),
    changeLanguage(lang: Languages) {
        if (lang) {
            this.lang = lang;
            localStorage.setItem('lang', lang);
        }
    },
    toggleBrightMode() {
        this.brightMode = !this.brightMode;
        if (this.brightMode) localStorage.setItem('brightMode', 'true');
        else localStorage.removeItem('brightMode');
    }
});

export { modeStore };
