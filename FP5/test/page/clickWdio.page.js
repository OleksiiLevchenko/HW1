class clickWdioPage {

    get wdioPage() {
        return $('[href="/webdriverio/webdriverio"]')
        }
        async wdioPageClick () {
            this.wdioPage.click();
            console.log('Wdio URL is: ' + await this.wdioPage.getUrl());
        }
}

module.exports = new clickWdioPage()