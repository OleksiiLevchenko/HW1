class verifyAccountPage {

    get verifyAccount() {
        return $('//*[@id="captcha-and-submit-container"]/div[1]')
        }
        async VerifyIsDisplayed () {
           console.log('Verify Account is displayed? ' + await this.verifyAccount.isDisplayed())
           
    }
}

module.exports = new verifyAccountPage()