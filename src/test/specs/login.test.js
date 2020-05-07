//these lines are to import data from respective pages to this page
const loginPage = require('../../pages/login.page')
const loginPageElements = require('../../elements/loginpage.elements')
const configData = require('../../../config/config')
const constants = require('../../../config/constants')
var xslx=require("xlsx");
const sheetData=require('../../../config/sheetconfig')
const elementUtil = require('../../../util/element.util')



describe('login page feature test', function(){
    // //***test case to verify the login page title***//       
    // it('verify login page title', function(){
    //     browser.url('https://app.hubspot.com')
    //     const title = loginPage.PageTitle()
    //     console.log('login page title is :', title);
    //     elementUtil.validateIfEqual(constants.LOGIN_PAGE_TITLE, title, 'title is not found')     //assert helps to compare the actual and expected title
    // })

    // //***test case to verify the sign up link***//
    // it('verify sign up link', function(){
    //     browser.url('https://app.hubspot.com')
    //     elementUtil.validateIfTrue(loginPage.isSignUpLinkExist(), 'sign up link is not present')
    // })

    // //***test case to login into the page***//
    // it('verify login', function(){
    //     browser.url('https://app.hubspot.com')
    //     loginPage.doLogin(configData.username, configData.password) 
    // })
    
    //***test to check if checkbox is selected***
    it('click on checkbox', function(){
        browser.url('https://app.hubspot.com')
        //elementUtil.clickOnCheckBox(loginPageElements.CheckBoxElement)
        loginPage.clickOnCheckBox()
        browser.pause(5000)
        elementUtil.validateIfEqual(true, elementUtil.isElementSelected(loginPageElements.CheckBoxElement), 'Checkbox not selected')
    })
})

