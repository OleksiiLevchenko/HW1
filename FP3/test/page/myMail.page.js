class myMailPage {

    get myEmail() {
        return $('#email_field');
        }
        setMyMail (value) {
        this.myEmail.setValue(value);
    }
}

module.exports = new myMailPage()