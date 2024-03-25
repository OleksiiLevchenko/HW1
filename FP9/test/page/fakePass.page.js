const { faker } = require('@faker-js/faker');
class fakePassPage {

    get fakePass() {
        return $('#password');
        }
        setfakePass () {
        this.fakePass.setValue(faker.internet.password());
    }
}

module.exports = new fakePassPage()