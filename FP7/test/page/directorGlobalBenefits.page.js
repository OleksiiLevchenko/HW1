class directorGlobalBenefitsPage {

    get getTextFunction() {
        return $('#link-job-5')
        }
       async directorGlobalBenefitsText () {
           console.log('[6]Output result is: ' + await this.getTextFunction.getText()) ;
        }
}

module.exports = new directorGlobalBenefitsPage()