class ContinueNickName {

    get ContinueNick() {
        return $('//*[@id="username-container"]/div[2]/button')
        }
        clickContinueNickName() {
            this.ContinueNick.click();
    }
}

module.exports = new ContinueNickName()