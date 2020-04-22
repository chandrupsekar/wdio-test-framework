// const elementUtil = require('../../util/element.util')
// const constants  = require('../../config/constants')
// const loginPage = require('../pages/login.page')
// const configData = require('../../config/config')
// const dashboardPageElements = require('../elements/dashboardpage.elements')

// class DashboardPage {
    
//     //Page actions to perfom on the page
//     getPageTitle() {
//         return elementUtil.getPageTitle(constants.DASHBOARD_PAGE_TITLE)
//     }
//     scrollClickElement() {
//         loginPage.doLogin(configData.username,configData.password)
//         browser.pause(10000)
//         elementUtil.scrollElementIntoView(dashboardPageElements.createDealElement)
//         //dashboardPage.moveToElement(dashboardPageElements.createDealElement)
//         elementUtil.clickElement(dashboardPageElements.createDealElement)
//     }
// }
// module.exports = new DashboardPage()


const elementUtil = require('../../util/element.util')
const constants  = require('../../config/constants')
const loginPage = require('../pages/login.page')
const configData = require('../../config/config')
const dashboardPageElements = require('../elements/dashboardpage.elements')

class DashboardPage {
    
    //Page actions to perfom on the page
    PageTitle() {
        return elementUtil.waitForPageTitle(constants.DASHBOARD_PAGE_TITLE)
    }
    scrollClickElement() {
        loginPage.doLogin(configData.username,configData.password)
        elementUtil.scrollElementIntoView(dashboardPageElements.createDealElement)
        elementUtil.moveToElement(dashboardPageElements.createDealElement)
        elementUtil.clickElement(dashboardPageElements.createDealElement)
    }
}
module.exports = new DashboardPage()
