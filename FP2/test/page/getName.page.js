class getNamePage {

    get getmyName() {
        return $('//*[text()="OleksiiLevchenko"]')
        }
        async getFIO() {
            
          
            console.log(this.getmyName.getText());
            console.log(this.getmyName.getUrl())
    }
}

module.exports = new getNamePage()