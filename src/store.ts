const { observable } = require('mobx');

const modeAtlocalStorage = localStorage.getItem('brightMode')

const modeStore = observable({
    brightMode: modeAtlocalStorage ? modeAtlocalStorage === "false" ? false : true : true,
    toggleBrightMode() {
        this.brightMode = !this.brightMode;
        localStorage.setItem('brightMode', (this.brightMode).toString());
    }
});

export { modeStore };