class clickPreferencesPage {

    get PreferencesButton() {
        return $('//*[@id="opt-in-container"]/div[2]/button')
        }
        clickPreferencesButton () {
            this.PreferencesButton.click();
            
    }
}

module.exports = new clickPreferencesPage()