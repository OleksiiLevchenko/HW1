class scrollCareersPage {

    get Careers() {
        return $('[href="https://github.careers"]')
        }
        scrollToCareers () {
            this.Careers.scrollIntoView();
    }
}

module.exports = new scrollCareersPage()