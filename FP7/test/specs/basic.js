const assert = require('assert')
const scrollCareersPage = require('../page/scrollCareers.page.js');
const clickOnCareersPage = require('../page/clickOnCareers.page.js')
const rolesPage = require('../page/rolesPage.page.js') 
const staffSoftwareEngineerPage = require('../page/staffSoftwareEngineer.page.js')
const incidentResponseAnalystProductSecurityPage = require('../page/incidentResponseAnalystProductSecurity.page.js')
const seniorCustomerSuccessArchitectPage = require('../page/seniorCustomerSuccessArchitect.page.js') 
const securityAnalystIIIPage = require('../page/securityAnalystIII.page.js')  
const seniorCustomerSuccessManagerPage = require('../page/seniorCustomerSuccessManager.page.js')  
const directorGlobalBenefitsPage = require('../page/directorGlobalBenefits.page.js')  
const staffManagerIncidentResponsePage = require('../page/staffManagerIncidentResponse.page.js')  
const incidentResponseAnalystProductSecurity1Page = require('../page/incidentResponseAnalystProductSecurity1.page.js') 
const staffProductManagerPage = require('../page/staffProductManager.page.js')  
const revenueInternPage = require('../page/revenueIntern.page.js')   

    it('Go to github.com', async () => {
        await browser.url('https://github.com/');
        scrollCareersPage.scrollToCareers();
        await browser.pause(1000);
        })

    it('Click on Open Source', async () => {
        clickOnCareersPage.clickOnCareersButton();
        await browser.pause(1000);
        })

    it('Click on Topics', async () => {
        rolesPage.clickRolesButton();
        await browser.pause(3000);
        })

    it('[1]Output result', async () => {
        staffSoftwareEngineerPage.staffSoftwareEngineerText();
        await browser.pause(1000);
        }) 

     it('[2]Output result', async () => {
        incidentResponseAnalystProductSecurityPage.incidentResponseAnalystProductSecurityText();
        await browser.pause(1000);
        })

     it('[3]Output result', async () => {
        seniorCustomerSuccessArchitectPage.seniorCustomerSuccessArchitectText();
        await browser.pause(1000);
        })

    it('[4]Output result', async () => {
        securityAnalystIIIPage.securityAnalystIIIText();
        await browser.pause(1000);
        })

    it('[5]Output result', async () => {
        seniorCustomerSuccessManagerPage.seniorCustomerSuccessManagerText();
        await browser.pause(1000);
        })  

    it('[6]Output result', async () => {
        directorGlobalBenefitsPage.directorGlobalBenefitsText();
        await browser.pause(1000);
        })

    it('[7]Output result', async () => {
        staffManagerIncidentResponsePage.staffManagerIncidentResponseText();
        await browser.pause(1000);
        })

    it('[8]Output result', async () => {
        incidentResponseAnalystProductSecurity1Page.incidentResponseAnalystProductSecurity1Text();
        await browser.pause(1000);
        })

    it('[9]Output result', async () => {
        staffProductManagerPage.staffProductManagerText();
        await browser.pause(1000);
        }) 

    it('[10]Output result', async () => {
        revenueInternPage.revenueInternPageText();
        await browser.pause(3000);
        }) 
                                                    
    