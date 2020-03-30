const loginPageElements = require('../elements/loginpage.elements')
const elementUtil = require('../../util/elementUtil')
class LoginPage{

    //Page actions:
    getPageTitle(){
        return elementUtil.doGetPageTitle()
    }
    
    doesSignUpLinkExist(){
        return elementUtil.doIsDisplayed(loginPageElements.signUpLink)
    }

    doLogin(emailID, pwd){
        elementUtil.doSetValue(loginPageElement.username, 'username')
        elementUtil.doSetValue(loginPageElement.password, 'password')
        elementUtil.doClick(loginPageElement.loginBtn)
    }
}
module.exports = new LoginPage()