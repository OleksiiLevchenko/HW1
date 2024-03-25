class ContinueEmail {

    get continueEmail() {
        return $('//*[@id="email-container"]/div[2]/button')
        }
        clickContinueEmail () {
            this.continueEmail.click();
    }
}

module.exports = new ContinueEmail()