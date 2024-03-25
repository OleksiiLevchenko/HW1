class staffSoftwareEngineerPage {

    get getTextFunction() {
        return $('#link-job-0')
        }
        async staffSoftwareEngineerText () {
           console.log('[1]Output result is: ' + await this.getTextFunction.getText()) ;
        }
}

module.exports = new staffSoftwareEngineerPage()