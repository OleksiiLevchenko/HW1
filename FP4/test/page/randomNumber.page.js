const { faker  } = require('@faker-js/faker');

class randomNumberPage {

    get randomNumber() {
        return $('#contact_request_phone')
        }
        setRandomNumber () {
            this.randomNumber.setValue(faker.phone.number());
        }
}

module.exports = new randomNumberPage()