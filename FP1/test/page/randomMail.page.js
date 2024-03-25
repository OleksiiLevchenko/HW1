const { faker } = require('@faker-js/faker');

class randomMailPage {

    get randomMail() {
        return $('//*[@id="email"]');
        }
    setUserEmail () {
        this.randomMail.setValue(faker.internet.email());
    }
}

module.exports = new randomMailPage()