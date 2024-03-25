const assert = require('assert')
const navigationPage = require('../page/navigation.page.js');
const openSourcePage = require('../page/openSource.page.js')
const topicsButtonPage = require('../page/topicsButton.page.js') 
const topicsIsDisplayedPage = require('../page/topicsIsDisplayed.page.js')

describe('webdriver.io page', async () => {
    
    it('Go to github.com', async () => {
        await browser.url('https://github.com/');
        navigationPage.clickNavigatipnButton();
        await browser.pause(1000);
        })

    it('Click on Open Source', async () => {
        openSourcePage.clickOpenButton();
        await browser.pause(1000);
        })

    it('Click on Topics', async () => {
        topicsButtonPage.clickTopicsButton();
        await browser.pause(2000);
        })

     it('Topics is displayed in view port?', async () => {
        topicsIsDisplayedPage.viewPort();
        await browser.pause(3000);
        }) 
    }
)