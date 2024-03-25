const assert = require('assert')
const scrollExplorePage = require('../page/scrollExplore.page.js')
const downloadPage = require('../page/download.page')
const explorePage = require('../page/explore.page.js')
const readPage = require('../page/read.page.js') 


describe('webdriver.io page', async () => {
    
    it('Go to github.com', async () => {
        await browser.url('https://github.com/');
        scrollExplorePage.scroll();
        await browser.pause(1000);
        })

    it('Click for focus on Download button and use isDisplayedInWievPort method', async () => {
        downloadPage.clickDownloadFocus();
        await browser.pause(1000);
        })

    it('Click for focus on Explore button and use isDisplayedInWievPort method', async () => {
        explorePage.clickExploreFocus();
        await browser.pause(1000);
        })

      it('Click for focus on Read button and use isDisplayedInWievPort method', async () => {
        readPage.clickReadButton();
        await browser.pause(3000);
        }) 
    }
)