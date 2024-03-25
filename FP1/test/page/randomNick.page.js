
const { faker  } = require('@faker-js/faker');
class randomNickPage {

    get randomNick() {
        return $('//*[@id="login"]')
        }
    setUserName () {
        this.randomNick.addValue(faker.string.alpha(18));
    }
}

module.exports = new randomNickPage()