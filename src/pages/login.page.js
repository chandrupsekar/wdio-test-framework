const elementUtil = require('../../util/element.util')
const constants  = require('../../config/constants')
const loginPageElements = require('../elements/loginpage.elements')
const db = require('../../util/database.util')
const configData = require('../../config/config')
class LoginPage {
    
    //Page actions to perfom on the page
    PageTitle() {
        return elementUtil.getPageTitle(constants.LOGIN_PAGE_TITLE)
    }
    isSignUpLinkExist() {
        return elementUtil.isElementDisplayed(loginPageElements.signUpLink)
    }
    
    doLogin(emailID, pwd) {
        elementUtil.doSetValue(loginPageElements.username, emailID)
<<<<<<< HEAD
        elementUtil.doSetValue(loginPageElements.password,  pwd)
        elementUtil.doClick(loginPageElements.loginBtn)
||||||| merged common ancestors
        elementUtil.doSetValue(loginPageElements.password, pwd)
        elementUtil.doClick(loginPageElements.loginBtn)
=======
        elementUtil.doSetValue(loginPageElements.password, pwd)
        elementUtil.clickElement(loginPageElements.loginBtn)
>>>>>>> 3b6c3be88d293f03c113a7f07b48d6e4ab3ce9a2
    }
<<<<<<< HEAD
    clickOnCheckBox(element){
        if(!isCheckboxSelected)
            elementUtil.doClick(loginPageElements.clickableCheckBoxElement)
    } 
    isCheckboxSelected(element){
        return element.isElementSelected()
    }
||||||| merged common ancestors
=======
    clickOnCheckBox(){
        browser.pause(5000)
        elementUtil.clickElement(loginPageElements.clickableCheckBoxElement)
    }  
>>>>>>> 3b6c3be88d293f03c113a7f07b48d6e4ab3ce9a2
}
module.exports = new LoginPage()
