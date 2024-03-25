class typeScriptPage {

    get typeScript() {
        return $('/html/body/div[1]/div[4]/main/react-app/div/div/div[1]/div/div/div[1]/div[2]/div/div/div/div/ul/li[3]/ul/li[2]')
        }
        clicktypeScriptButton () {
            this.typeScript.click();
    }
}

module.exports = new typeScriptPage()