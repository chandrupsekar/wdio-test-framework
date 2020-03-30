const elementUtil = require('../../util/elementUtil')
const constants  = require('../../config/constants')
const loginPageElements = require('../elements/loginpage.elements')

class LoginPage {
    
    //page actions:
    getPageTitle() {
        return elementUtil.doGetPageTitle(constants.LOGIN_PAGE_TITLE)
    }
    isSignUpLinkExist() {
        return elementUtil.doIsDisplayed(loginPageElements.signUpLink)
    }
    doLogin(emailID, pwd) {
        elementUtil.doSetValue(loginPageElements.username, emailID)
        elementUtil.doSetValue(loginPageElements.password, pwd)
        elementUtil.doClick(loginPageElements.loginBtn)
    }
}
module.exports = new LoginPage()