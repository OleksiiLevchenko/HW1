class searchButtonPage {

    get searchButton() {
        return $('/html/body/div[1]/div[1]/header/div/div[2]/div/div/qbsearch-input/div[1]/button/span');
        }
        clickPricingButton () {
        this.searchButton.click();
    }
}

module.exports = new searchButtonPage()