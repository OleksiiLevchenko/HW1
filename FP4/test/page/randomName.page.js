const { faker  } = require('@faker-js/faker');

class enterprisePage {

    get randomName() {
        return $('#contact_request_name')
        }
        setUserName () {
            this.randomName.setValue(faker.person.fullName());
        }
}

module.exports = new enterprisePage()