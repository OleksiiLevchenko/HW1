const assert = require('assert')
const navigationPage = require('../page/navigation.page.js');
const PricingPage = require('../page/pricing.page.js')
const scrollPage = require('../page/scroll.page.js') 
const startButtonPage = require('../page/startButton.page.js')
const enterprisePage = require('../page/enterprise.page.js')
const randomNamePage = require('../page/randomName.page.js')
const randomCompanyPage = require('../page/randomCompany.page.js')
const randomEmailPage = require('../page/randomEmail.page.js')
const randomNumberPage = require('../page/randomNumber.page.js')
const countryPage = require('../page/country.page.js');
const selectCountryPage = require('../page/selectCountry.page.js');
const installationTypePage = require('../page/installationType.page.js');
const yesButtonPage = require('../page/yesButton.page.js');
const inputTextPage = require('../page/inputText.page.js');
const acceptTermsPage = require('../page/acceptTerms.page.js');
const yesPleaseButtonPage = require('../page/yesPlease.page.js');

describe('webdriver.io page', async () => {
    
    it('Go to github.com', async () => {
        await browser.url('https://github.com/');
        navigationPage.clickNavigatipnButton();
        await browser.pause(1000);
        })

    it('Click on Pricing Button', async () => {
        PricingPage.clickPricingButton();
        await browser.pause(1000);
        })

    it('Scroll to Enterprise', async () => {
        scrollPage.scrollToEnterprise();
        await browser.pause(1000);
        })

    it('Click "Start a free trial" ', async () => {
        startButtonPage.clickStartButton();
        await browser.pause(1000);
        }) 

    it('Click on Enterprise Server', async () => {
        enterprisePage.clickEnterpriseServer();
        await browser.pause(1000);
        })       
    
    it('Should input random Name', async () => {
        randomNamePage.setUserName();
        await browser.pause(1000);    
        })

    it('Should input random Company', async () => {
        randomCompanyPage.setRandomCompany();
        await browser.pause(1000);
        })

    it('Should input random Email', async () => {
        randomEmailPage.setrandomEmail();
        await browser.pause(1000);
        })

    it('Should input random Phone number', async () => {
        randomNumberPage.setRandomNumber();
        await browser.pause(1000);
        })

    it('Should cklick on list of countries', async () => {
        countryPage.clickCountryList();
        await browser.pause(1000);
        })
    
    it('Should cklick on "Ukraine"', async () => {
        selectCountryPage.clickUkraine();
        await browser.pause(1000);
        })    

    it('Should select your installation type', async () => {
        installationTypePage.clickGoogleCloud();
        await browser.pause(1000);
        })     

    it('Should click on radio button "Yes"', async () => {
        yesButtonPage.clickYesButton();
        await browser.pause(1000);
        })     
     
    it('Input random text', async () => {
        inputTextPage.setRandomText();
        await browser.pause(1000);
        }) 

    it('Click on button "Accept terms of use"', async () => {
        acceptTermsPage.clickAcceptButton();
        await browser.pause(1000);
        })    
 
    it('Click on button "Yes, please..."', async () => {
        yesPleaseButtonPage.clickYesPleaseButton();
        await browser.pause(3000);
        })  
    }
)