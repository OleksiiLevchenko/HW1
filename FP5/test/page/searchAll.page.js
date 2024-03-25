class searchAllPage {

    get searchAll() {
        return $('//*[@id="query-builder-test-results"]/li/ul')
        }
        clicksearchAllButton() {
            this.searchAll.click();
    }
}

module.exports = new searchAllPage()