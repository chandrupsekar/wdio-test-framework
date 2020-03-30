const loginPageElements = require('../elements/loginpage.elements')
const elementUtil = require('../../util/elementUtil')
const constants  = require('../../config/constants')
class LoginPage{

    //Page actions:
    getPageTitle(){
        return elementUtil.doGetPageTitle()
    }
    
    doesSignUpLinkExist(){
        return elementUtil.doIsDisplayed(loginPageElements.signUpLink)
    }

    doLogin(emailID, pwd){
        elementUtil.doSetValue(loginPageElements.username, 'username')
        elementUtil.doSetValue(loginPageElements.password, 'password')
        elementUtil.doClick(loginPageElements.loginBtn)
    }
}
module.exports = new LoginPage()