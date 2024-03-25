class acceptTermsPage {

    get acceptButton() {
        return $('#contact_request_agreed_to_terms')
        }
        clickAcceptButton () {
            this.acceptButton.click();
    }
}

module.exports = new acceptTermsPage()