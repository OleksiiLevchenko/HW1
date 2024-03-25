class staffProductManagerPage {

    get getTextFunction() {
        return $('#link-job-8')
        }
       async staffProductManagerText () {
           console.log('[9]Output result is: ' + await this.getTextFunction.getText()) ;
        }
}

module.exports = new staffProductManagerPage()