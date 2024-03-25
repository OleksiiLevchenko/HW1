const assert = require('assert')
const signInPage = require('../page/signIn.page.js');
const myMailPage = require('../page/myMail.page.js')
const myPasswordPage = require('../page/myPass.page.js') 
const signInButtonPage = require('../page/signInButton.page.js')
const clickImgPage = require('../page/clickImg.page.js')
const getNamePage = require('../page/getName.page.js')

describe('webdriver.io page', async () => {
    
    it('should demonstrate the addValue command', async () => {
        await browser.url('https://github.com/');
        signInPage.clickSignInButton();
        await browser.pause(2000);
        })

     it('Set my Email', async () => {
        myMailPage.setMyMail('o.levchenko@neolit.ua');
        await browser.pause(2000);
        })

     it('Set my password', async () => {
        myPasswordPage.setMyPass('-E8_P8hi2x');
        await browser.pause(2000);
         })

     it('Click "Sign In" ', async () => {
        signInButtonPage.clickSignInButton();
        await browser.pause(1000);
        }) 
     it('Click img', async () => {
        clickImgPage.clickImg();
        await browser.pause(1000);
        })       

     it('Show my name and URL Github', async () => {
        getNamePage.getFIO();
        await browser.pause(4000);
        })
    }
)