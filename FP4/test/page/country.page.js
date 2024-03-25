class countryPage {

    get country() {
        return $('#contact_request_country')
        }
        clickCountryList () {
            this.country.click();
    }
}

module.exports = new countryPage()