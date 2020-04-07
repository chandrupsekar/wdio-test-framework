const loginPage = require('../../pages/login.page')
const loginPageElements = require('../../elements/loginpage.elements')
const configData = require('../../../config/config')
const constants = require('../../../config/constants')


describe('login page feature test', function(){
    this.retries(config.retries)
    it('verify login page title', function(){
        browser.url('/')
        //browser.maximizeWindown
        const title = loginPage.getPageTitle()
        console.log('login page title is :', title);
        assert.equal(constants.LOGIN_PAGE_TITLE, title, 'title is not found')
    })
    it('verify sign up link', function(){
        browser.url('/')
        assert.equal(true, loginPage.isSignUpLinkExist(), 'sign up link is not present')
    })
    it('verify login', function(){
        browser.url('/')
        //loginPage.doLogin('naveenanimation30@gmail.com', 'Test@1234')
        //sample line 
        loginPage.doLogin(configData.username, configData.password)
    })
})