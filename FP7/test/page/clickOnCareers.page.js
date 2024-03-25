class clickOnCareersPage{

    get clickOnCareers() {
        return $('[href="https://github.careers"]');
        }
        clickOnCareersButton () {
        this.clickOnCareers.click();
    }
}

module.exports = new clickOnCareersPage()