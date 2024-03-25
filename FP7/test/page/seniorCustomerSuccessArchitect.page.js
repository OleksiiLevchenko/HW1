class seniorCustomerSuccessArchitectPage {

    get getTextFunction() {
        return $('#link-job-2')
        }
       async seniorCustomerSuccessArchitectText () {
           console.log('[3]Output result is: ' + await this.getTextFunction.getText()) ;
        }
}

module.exports = new seniorCustomerSuccessArchitectPage()