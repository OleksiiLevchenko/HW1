const { faker  } = require('@faker-js/faker');

class randomEmailPage {

    get randomEmail() {
        return $('#contact_request_email')
        }
        setrandomEmail () {
            this.randomEmail.setValue(faker.internet.exampleEmail());
        }
}

module.exports = new randomEmailPage()