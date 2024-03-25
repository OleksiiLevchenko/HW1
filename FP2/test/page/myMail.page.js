class randomMailPage {

    get randomMail() {
        return $('#login_field');
        }
        setMyMail (value) {
        this.randomMail.setValue(value);
    }
}

module.exports = new randomMailPage()