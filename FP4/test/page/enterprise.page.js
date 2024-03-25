class enterprisePage {

    get EnterpriseServer() {
        return $('/html/body/div[1]/div[4]/main/div/div[2]/div/div/div[2]/a/div/div')
        }
        clickEnterpriseServer() {
            this.EnterpriseServer.click();
    }
}

module.exports = new enterprisePage()