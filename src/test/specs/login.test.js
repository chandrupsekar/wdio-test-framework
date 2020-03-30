const loginPage = require('../../pages/login.page')

describe('login page feature test', ()=>{
    it('verify login page title', ()=>{
        browser.url('/')
        browser.maximizeWindow
        const title = (loginPage.getPageTitle)
        console.log('login page title is : ', title)
        assert.equal('HubSpot Login', title, 'title is not found')
    })
    it('verify sign up link', ()=>{
        assert.equal(true, loginPage.doesSignUpLinkExist(), 'sign up link is not present.')
    })
    it('verify login', ()=>{
        loginPage.doLogin("rawat1416@gmail.com", "KaranArjun@1")
    })
})