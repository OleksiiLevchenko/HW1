class setWdioPage {

    get webdriverIo() {
        return $('#query-builder-test')
        }
        setWebdriverIo (value) {
            this.webdriverIo.setValue(value);
        }
}

module.exports = new setWdioPage()