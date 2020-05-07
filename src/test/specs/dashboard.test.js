
const dashboardPage = require('../../pages/dashboard.page')
const constants = require('../../../config/constants')
const elementUtil = require('../../../util/element.util')

describe('Dashboard page feature test', function(){
    it('scrollview', function(){
        browser.url('https://app.hubspot.com')
        dashboardPage.scrollClickElement()
        const title = elementUtil.getPageTitle()
        elementUtil.validateIfEqual(title, constants.DEALS_PAGE_TITLE , 'Scroll element not clicked')
    })

})

