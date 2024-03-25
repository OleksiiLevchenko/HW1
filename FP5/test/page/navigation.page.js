class navigationPage {

    get NavButton() {
        return $('/html/body/div[1]/div[1]/header/div/div[1]/div[2]/button')
        }
        clickNavigatipnButton () {
            this.NavButton.click();
    }
}

module.exports = new navigationPage()