const { observable } = require('mobx');

const modeStore = observable({
    brightMode: true,
    toggleBrightMode() {
        console.log(this.brightMode);
        this.brightMode = !this.brightMode;
    }
});

export { modeStore };