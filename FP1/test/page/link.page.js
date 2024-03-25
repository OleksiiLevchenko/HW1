class linkPage {

    get link() {
        return $('//*[@id="captcha-and-submit-container"]/div[1]')
        }
        async showLink () {
           console.log('Url is: ' + await this.link.getUrl())
           
    }
}

module.exports = new linkPage()