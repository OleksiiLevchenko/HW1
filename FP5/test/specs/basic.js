const assert = require('assert')
const navigationPage = require('../page/navigation.page.js');
const searchButtonPage = require('../page/searchButton.page.js')
const setWdioPage = require('../page/setWdio.page.js') 
const searchAll = require('../page/searchAll.page.js')
const typeScriptPage = require('../page/typeScript.page.js')
const clickWdioPage = require('../page/clickWdio.page.js')

describe('webdriver.io page', async () => {
    
    it('Go to github.com', async () => {
        await browser.url('https://github.com/');
        navigationPage.clickNavigatipnButton();
        await browser.pause(1000);
        })

    it('Click on Pricing Button', async () => {
        searchButtonPage.clickPricingButton();
        await browser.pause(1000);
        })

    it('Set WebdriverIo in search', async () => {
        setWdioPage.setWebdriverIo('WebdriverIo');
        await browser.pause(1000);
        })

    it('Click on search button', async () => {
        searchAll.clicksearchAllButton();
        await browser.pause(1000);
        }) 

    it('Click on Type Script button', async () => {
        typeScriptPage.clicktypeScriptButton();
        await browser.pause(1000);
        })       
    
    it('Click on Type wdio result end demonstrate URL', async () => {
        clickWdioPage.wdioPageClick();
        await browser.pause(3000);    
        })
    }
)