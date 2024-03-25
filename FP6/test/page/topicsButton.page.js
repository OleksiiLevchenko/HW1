class topicsButtonPage {

    get topicsButton() {
        return $('[href="/topics"]')
        }
        clickTopicsButton () {
            this.topicsButton.click();
        }
}

module.exports = new topicsButtonPage()