const { faker  } = require('@faker-js/faker');

class randomPassPage {

    get randomPass() {
        return $('#password');
        }
    setUserPass () {
        this.randomPass.setValue(faker.string.alpha(18));
    }
}

module.exports = new randomPassPage()