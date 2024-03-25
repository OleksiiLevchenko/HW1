class topicsIsDisplayedPage {

    get topicsIsDisplayed() {
        return $('/html/body/div[1]/div[4]/main/div[2]/div/h1')
        }
        async  viewPort() {
        console.log('Topics is displayed in View Port? ' +  await this.topicsIsDisplayed.isDisplayedInViewport());
         

    }
}

module.exports = new topicsIsDisplayedPage()