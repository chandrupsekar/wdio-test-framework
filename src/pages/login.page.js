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
        elementUtil.doSetValue(loginPageElements.password, pwd)
        elementUtil.clickElement(loginPageElements.loginBtn)
    }
    clickOnCheckBox(element){
        if(!isCheckboxSelected)
            elementUtil.doClick(loginPageElements.clickableCheckBoxElement)
    } 
    isCheckboxSelected(element){
        return element.isElementSelected()
    }
    clickOnCheckBox(){
        browser.pause(5000)
        elementUtil.clickElement(loginPageElements.clickableCheckBoxElement)
    }  
}
module.exports = new LoginPage()
