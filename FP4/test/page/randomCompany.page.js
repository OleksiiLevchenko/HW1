const { faker  } = require('@faker-js/faker');

class randomCompanyPage {

    get randomCompany() {
        return $('#contact_request_organization_name')
        }
        setRandomCompany () {
            this.randomCompany.setValue(faker.company.name());
        }
}

module.exports = new randomCompanyPage()