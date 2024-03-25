class getName {

    get getmyName() {
        return $('//*[text()="OleksiiLevchenko"]')
        }
        getFIO() {
            
            //this.getmyName.getAttribute('href');
            console.log(this.getmyName.getAttribute('href'))
    }
}

module.exports = new getName()