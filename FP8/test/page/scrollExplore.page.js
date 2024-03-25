class scrollExplorePage {

    get scrollFuntion() {
        return $('//*[@id="security"]/div/div[3]')
        }
          scroll() {
        this.scrollFuntion.scrollIntoView();
         

    }
}

module.exports = new scrollExplorePage()