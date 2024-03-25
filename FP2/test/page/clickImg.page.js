class clickImgPage {

    get Image() {
        return $('.AppHeader-user')
        }
        clickImg() {
            this.Image.click();
    }
}

module.exports = new clickImgPage()