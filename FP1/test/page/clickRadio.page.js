class clickRadioPage {

    get clickRadio() {
        return $('#opt_in')
        }
        clickRadioButton () {
            this.clickRadio.click();
    }
}

module.exports = new clickRadioPage()