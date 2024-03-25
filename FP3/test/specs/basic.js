const assert = require('assert')
const signInPage = require('../page/signIn.page.js');
const forgotPage = require('../page/forgotPassPage.js')
const myMailPage = require('../page/myMail.page.js') 

describe('webdriver.io page', async () => {
    
    it('should demonstrate the addValue command', async () => {
        await browser.url('https://github.com/');
        signInPage.clickSignInButton();
        await browser.pause(2000);
        })

     it('Click on password', async () => {
        forgotPage.clickForgotPassword();
        await browser.pause(1000);
        })

     it('Set my mail', async () => {
        myMailPage.setMyMail('o.levchenko@neolit.ua');
        await browser.pause(3000);
        })
    }
)