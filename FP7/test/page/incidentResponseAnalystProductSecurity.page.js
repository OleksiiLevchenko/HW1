class incidentResponseAnalystProductSecurityPage {

    get getTextFunction() {
        return $('#link-job-1')
        }
       async incidentResponseAnalystProductSecurityText () {
           console.log('[2]Output result is: ' + await this.getTextFunction.getText()) ;
        }
}

module.exports = new incidentResponseAnalystProductSecurityPage()