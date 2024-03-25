class yesPleaseButtonPage {

    get yesPleaseButton() {
        return $('#marketing_email_opt_in-default')
        }
        clickYesPleaseButton () {
            this.yesPleaseButton.click();
    }
}

module.exports = new yesPleaseButtonPage()