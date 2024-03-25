const assert = require('assert')
const signUpPage = require('../page/signUp.page.js');
const randomMailPage = require('../page/randomMail.page.js')
const continueEmail = require('../page/continueEmail.page.js')
const randomPassPage = require('../page/randomPass.page.js') 
const ContinuePassword = require('../page/continuePassword.page.js')
const randomNickPage = require('../page/randomNick.page.js')
const ContinueNickName = require('../page/continueNickName.page.js')
const clickRadioPage = require('../page/clickRadio.page.js')
const clickPreferencesPage = require('../page/clickPreferences.page.js')
const linkPage = require('../page/link.page.js')
const verifyAccountPage = require('../page/verifyAccount.page.js')

describe('webdriver.io page', async () => {
    
    it('should demonstrate the addValue command', async () => {
        await browser.url('https://github.com/');
        signUpPage.clickSignUpButton();
        await browser.pause(4000);
        })

    it('should input random Email', async () => {
        randomMailPage.setUserEmail();
        await browser.pause(1000);
        })

    it('should click ContinueEmail button', async () => {
        continueEmail.clickContinueEmail();
        await browser.pause(1000);
        })

    it('should input random password', async () => {
        randomPassPage.setUserPass();
        await browser.pause(1000);
        })    

    it('should click ContinuePassword button', async () => {
        ContinuePassword.clickContinuePassword();
        await browser.pause(1000);
        })
    
    it('should input random nickName', async () => {
        randomNickPage.setUserName();
        await browser.pause(1000);    
        })

    it('should click ContinuePassword button', async () => {
        ContinueNickName.clickContinueNickName();
        await browser.pause(1000);
        })

    it('should click Email Preferences radio Button', async () => {
        clickRadioPage.clickRadioButton();
        await browser.pause(1000);
        })

    it('should click Continue Button of Email Preferences', async () => {
        clickPreferencesPage.clickPreferencesButton();
        await browser.pause(2000);
        })
    
    it('show url link', async () => {
        linkPage.showLink();
        await browser.pause(2000);
        })    
    
    it('is displayed "Verify your account"?', async () => {
        verifyAccountPage.VerifyIsDisplayed();
        await browser.pause(4000);          
        })        
        
    })