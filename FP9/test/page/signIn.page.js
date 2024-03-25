class signInPage {

    get signInButton() {
        return $('/html/body/div[1]/div[1]/header/div/div[1]/div[1]/a')
        }
        clickSignInButton () {
            this.signInButton.click();
    }
}

module.exports = new signInPage()