const { faker  } = require('@faker-js/faker');

class inputTextPage {

    get inputText() {
        return $('#questions-list')
        }
        setRandomText (value) {
            this.inputText.setValue(faker.lorem.text(value));
        }
}

module.exports = new inputTextPage()