class selectCountryPage {

    get Ukraine() {
        return $('//*[@id="contact_request_country"]/option[224]')
        }
        clickUkraine () {
            this.Ukraine.click();
    }
}

module.exports = new selectCountryPage()