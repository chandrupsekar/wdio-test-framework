const elementUtil = require('../../util/element.util')
const constants  = require('../../config/constants')
const loginPageElements = require('../elements/loginpage.elements')

class LoginPage {
    
    //Page actions to perfom on the page
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
