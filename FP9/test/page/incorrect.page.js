class incorrectPage {

    get incorrect() {
        return $('//*[@id="js-flash-container"]/div/div/div');
        }
        async incorrectText () {
        console.log("Incorrect text is: "+ await this.incorrect.getText());
    }
}

module.exports = new incorrectPage()