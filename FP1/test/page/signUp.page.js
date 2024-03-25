class signUpPage {

    get signUpButton() {
        return $('/html/body/div[1]/div[4]/main/div[1]/div[2]/div/div/div[2]/div[2]/form/div/button')
        }
        clickSignUpButton () {
            this.signUpButton.click();
    }
}

module.exports = new signUpPage()