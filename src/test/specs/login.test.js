//these lines are to import data from respective pages to this page
const loginPage = require('../../pages/login.page')
const loginPageElements = require('../../elements/loginpage.elements')
const configData = require('../../../config/config')
const constants = require('../../../config/constants')
var xslx=require("xlsx");
const sheetData=require('../../../config/sheetconfig')


describe('login page feature test', function(){
        //test case to verify the login page title
        /*
    it('verify login page title', function(){
        browser.url('/')         //launching the browser '/' indicates the base url in wdio.config.js
        //browser.maximizeWindown
        const title = loginPage.getPageTitle()
        console.log('login page title is :', title);
        assert.equal(constants.LOGIN_PAGE_TITLE, title, 'title is not found')     //assert helps to compare the actual and expected title
    })
        //test case to verify the sign up link
    it('verify sign up link', function(){
        browser.url('/')
        assert.equal(true, loginPage.isSignUpLinkExist(), 'sign up link is not present')
    })
        //test case to login into the page
    it('verify login', function(){
        browser.url('/')
        //loginPage.doLogin('naveenanimation30@gmail.com', 'Test@1234')
        //sample line 
        loginPage.doLogin(configData.username, configData.password)
    })*/
    //  it('get data from sheet',function(){
    //     var wb=sheetData.getExcelSheetName()
    //     var ws=wb.Sheets["marks"];
    //     var data=xslx.utils.sheet_to_json(ws);     //this line convert sheet data into array of json objects.
    //     console.log(data[1]);
    //     console.log(wb.SheetNames);
    //     console.log(data); 
    // })
    it('click on checkbox', function(){
            browser.url("/");
            browser.pause(5000);
            loginPage.clickOnCheckBox();
            browser.pause(5000);
            assert.equal(true, loginPageElements.trueCheckBoxElement.isSelected(), 'Checkbox not selected')
            browser.pause(5000);
        })
})

