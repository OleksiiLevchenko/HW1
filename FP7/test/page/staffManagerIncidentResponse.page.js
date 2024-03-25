class staffManagerIncidentResponsePage {

    get getTextFunction() {
        return $('#link-job-6')
        }
       async staffManagerIncidentResponseText () {
           console.log('[7]Output result is: ' + await this.getTextFunction.getText()) ;
        }
}

module.exports = new staffManagerIncidentResponsePage()