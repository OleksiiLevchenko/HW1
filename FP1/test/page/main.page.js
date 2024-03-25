class randomNickPage {

    get randomNick() {
        return $('#login')
        }
    setUserName (value) {
        this.randomNick.addValue(value);
    }
}

module.exports = new randomNickPage()