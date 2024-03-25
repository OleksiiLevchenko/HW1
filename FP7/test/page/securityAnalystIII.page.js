class securityAnalystIIIPage {

    get getTextFunction() {
        return $('#link-job-3')
        }
       async securityAnalystIIIText () {
           console.log('[4]Output result is: ' + await this.getTextFunction.getText()) ;
        }
}

module.exports = new securityAnalystIIIPage()