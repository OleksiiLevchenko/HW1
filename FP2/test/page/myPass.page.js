class myPasswordPage {

    get randomPass() {
        return $('#password');
        }
    setMyPass (value) {
        this.randomPass.setValue(value);
    }
}

module.exports = new myPasswordPage()