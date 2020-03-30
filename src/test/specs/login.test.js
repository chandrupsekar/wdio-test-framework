const loginPage = require('../../pages/login.page')
const loginPageElements = require('../../elements/loginpage.elements')
const configData = require('../../../config/config')
const constants = require('../../../config/constants')

describe('login page feature test', ()=>{
    it('verify login page title', ()=>{
        browser.url('/')
        browser.maximizeWindow
        const title = (loginPage.getPageTitle)
        console.log('login page title is : ', title)
        assert.equal(constants.LOGIN_PAGE_TITLE, title, 'title is not found')
    })
    it('verify sign up link', ()=>{
        assert.equal(true, loginPage.doesSignUpLinkExist(), 'sign up link is not present.')
    })
    it('verify login', ()=>{
        loginPage.doLogin(configData.username, configData.password)
        loginPage.doClick()
    })
})