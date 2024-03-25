class installationTypePage {

    get installationType() {
        return $('//*[@id="contact-form-linkto"]/div[3]/label')
        }
        clickGoogleCloud () {
            this.installationType.click();
    }
}

module.exports = new installationTypePage()