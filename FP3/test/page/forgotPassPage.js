class forgotPage {

    get password() {
        return $('#forgot-password');
        }
        clickForgotPassword () {
        this.password.click();
    }
}

module.exports = new forgotPage()