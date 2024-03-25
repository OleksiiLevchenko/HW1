class seniorCustomerSuccessManagerPage {

    get getTextFunction() {
        return $('#link-job-4')
        }
       async seniorCustomerSuccessManagerText () {
           console.log('[5]Output result is: ' + await this.getTextFunction.getText()) ;
        }
}

module.exports = new seniorCustomerSuccessManagerPage()