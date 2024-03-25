class incidentResponseAnalystProductSecurity1Page {

    get getTextFunction() {
        return $('#link-job-7')
        }
       async incidentResponseAnalystProductSecurity1Text () {
           console.log('[8]Output result is: ' + await this.getTextFunction.getText()) ;
        }
}

module.exports = new incidentResponseAnalystProductSecurity1Page()