class downloadPage {

    get download() {
        return $('//*[@id="security"]/div/div[3]/card-skew/div')
        }
        async clickDownloadFocus () {
            this.download.click();
            console.log('Download is displayed In Viewport? ' + await this.download.isDisplayedInViewport())

    }
}

module.exports = new downloadPage()