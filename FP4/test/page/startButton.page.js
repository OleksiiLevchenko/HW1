class startButtonPage {

    get Start() {
        return $('/html/body/div[1]/div[4]/main/div[2]/div[2]/div[1]/div[3]/div/div/div[1]/div[3]/div/div/div[1]/a')
        }
        clickStartButton() {
            this.Start.click();
    }
}

module.exports = new startButtonPage()