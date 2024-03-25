const { faker } = require('@faker-js/faker');
class fakeMailPage {

    get fakeMail() {
        return $('#login_field');
        }
        setFakeMail () {
        this.fakeMail.setValue(faker.internet.email());
    }
}

module.exports = new fakeMailPage()