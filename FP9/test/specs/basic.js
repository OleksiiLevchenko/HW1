const assert = require('assert')
const signInPage = require('../page/signIn.page.js')
const fakeMailPage = require('../page/fakeMail.page.js')
const fakePassPage = require('../page/fakePass.page.js') 
const signInButtonPage = require('../page/signInButton.page.js') 
const incorrectPage = require('../page/incorrect.page.js') 

describe('webdriver.io page', async () => {
    
    it('should demonstrate the addValue command', async () => {
        await browser.url('https://github.com/');
        signInPage.clickSignInButton();
        await browser.pause(2000);
        })

    it('Set fake email', async () => {
        fakeMailPage.setFakeMail();
        await browser.pause(1000);
        })

    it('Set fake password', async () => {
        fakePassPage.setfakePass();
        await browser.pause(1000);
        })
    it('Click on Sign In button', async () => {
        signInButtonPage.signInButtonClick();
        await browser.pause(1000);
        })  
    it('Get text "Incorrect username or password."', async () => {
        incorrectPage.incorrectText();
        await browser.pause(1000);
        })        
    }
)