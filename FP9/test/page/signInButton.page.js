class signInButtonPage {

    get signInButton() {
        return $('//*[@id="login"]/div[4]/form/div/input[13]');
        }
        signInButtonClick () {
        this.signInButton.click();
    }
}

module.exports = new signInButtonPage()