class PricingPage {

    get Pricing() {
        return $('/html/body/div[1]/div[1]/header/div/div[2]/div/nav/ul/li[4]/a');
        }
        clickPricingButton () {
        this.Pricing.click();
    }
}

module.exports = new PricingPage()