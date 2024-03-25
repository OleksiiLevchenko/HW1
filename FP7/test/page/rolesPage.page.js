class rolesPage {

    get rolesButton() {
        return $('[href="/jobs"]')
        }
        clickRolesButton () {
            this.rolesButton.click();
        }
}

module.exports = new rolesPage()