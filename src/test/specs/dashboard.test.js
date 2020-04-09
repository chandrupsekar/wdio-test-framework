//these lines are to import data from respective pages to this page
const dashboardPage = require('../../pages/dashboard.page')
const constants = require('../../../config/constants')

describe('login page feature test', function(){
    it('scrollview', function(){
        browser.url('/');
        dashboardPage.scrollClickElement()
        browser.pause(5000)
        const title = browser.getTitle();
        assert.equal(title, constants.DEALS_PAGE_TITLE , 'Scroll element not clicked')
    })

})

