class yesButtonPage {

    get YesButton() {
        return $('#questions_yes')
        }
        clickYesButton () {
            this.YesButton.click();
    }
}

module.exports = new yesButtonPage()