class ContinuePassword {

    get continuePass() {
        return $('//*[@id="password-container"]/div[2]/button')
        }
        clickContinuePassword() {
            this.continuePass.click();
    }
}

module.exports = new ContinuePassword()