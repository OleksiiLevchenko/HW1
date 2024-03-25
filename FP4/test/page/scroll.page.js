class scrollPage {

    get scroll() {
        return $('/html/body/div[1]/div[4]/main/div[2]/div[2]/div[1]/div[3]/div/p');
        }
    scrollToEnterprise () {
        this.scroll.scrollIntoView();
    }
}

module.exports = new scrollPage()