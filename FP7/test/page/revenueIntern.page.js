class revenueInternPage {

    get getTextFunction() {
        return $('#link-job-9')
        }
       async revenueInternPageText () {
           console.log('[10]Output result is: ' + await this.getTextFunction.getText()) ;
        }
}

module.exports = new revenueInternPage()