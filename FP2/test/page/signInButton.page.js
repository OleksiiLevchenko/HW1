class signInButtonPage {

    get signIn() {
        return $('//*[@id="login"]/div[4]/form/div/input[13]')
        }
        clickSignInButton() {
            this.signIn.click();
    }
}

module.exports = new signInButtonPage()