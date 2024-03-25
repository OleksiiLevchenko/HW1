class openSourcePage {

    get openSource() {
        return $('/html/body/div[1]/div[1]/header/div/div[2]/div/nav/ul/li[3]/button');
        }
        clickOpenButton () {
        this.openSource.click();
    }
}

module.exports = new openSourcePage()