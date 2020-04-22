const contacts = require('../../pages/contacts.page')
const home = require('../../pages/home.page')
const login = require('../../pages/login.page')
const util = require('../../../util/element.util')
const configData = require('../../../config/config')
const loginPageElements = require('../../elements/loginpage.elements')
const loginPage = require('../../pages/login.page')
const db   = require('../../../util/database.util')

describe('contacts page test',  function(){
    it('creating a new contact ',  function(){
        browser.url('/')
        //login.doLogin(configData.username, configData.password)
        //var arr = [];
        contacts.createNewContact(configData.tableName)
    })
})
// var arr = [];
        // try{
        //     await db.retrieve('contact').then(result=>{
        //         arr = result
        //     }).catch(err=>{
        //         console.log(err)
        //     })
        // }catch(err){
        //     console.log(err)
        // }
/*
it('logging using mysql datasource', async function(){
    browser.url('/')
    var arr = [];
    try{
        await db.retrieve('credential').then(result=>{
        console.log('inside then')
        console.log(result)
        arr = result
        }).catch(err=>{
            console.log(err)
        })
    }catch(err){
        console.log(err)
    }
    console.log('arr : ')
    console.log(arr)
    // console.log('outside then')
    // console.log(result)
    console.log(typeof $('#username') )
    // $('#username').then(result=>{result.setValue('rawat1416@gmail.com')}).catch(err=>{
    //     console.log(err)
    // })
    console.log(typeof $('#username') )
    // $('#password').then(result=>{result.setValue('KaranArjun@1')}).catch(err=>{
    //     console.log(err)
    // })
    console.log(typeof $('#username') )
    // $('#loginBtn').then(result=>{result.click()}).catch(err=>{
    //     console.log(err)
    // })

    // elementUtil.doSetValue(loginPageElements.username, emailID)
    // elementUtil.doSetValue(loginPageElements.password,  pwd)
    // elementUtil.doClick(loginPageElements.loginBtn)
})

*/


/*
    it('creating a new contact', function() {
         
        browser.url('/')
        
        contacts.createNewContact()
        /* 
        var arr = [];
        try{
            db.retrieve('contact').then(result=>{
                arr = result 
            }).catch(err=>{
                console.log(err)
            })
        }catch(err){
            console.log(err)
        }
        console.log('array inside createcontact')
        console.log(arr)
        browser.url('/')
        login.doLogin(configData.username, configData.password)
        $('#nav-primary-contacts-branch').waitForDisplayed({ timeout: 60000 })
        $('#nav-primary-contacts-branch').click()
        $('#nav-secondary-contacts').waitForDisplayed({ timeout: 60000 })
        $('#nav-secondary-contacts').click()
        $('div.add-control button').waitForDisplayed({ timeout: 60000 })
        $('div.add-control button').click()
        $('[data-selenium-test="property-input-email"]').waitForDisplayed({ timeout: 60000 })
        $('[data-selenium-test="property-input-email"]').setValue(JSON.stringify(arr[0].usename))
        $('[data-selenium-test="property-input-firstname"]').waitForDisplayed({ timeout: 60000 })
        $('[data-selenium-test="property-input-firstname"]').setValue(JSON.stringify(arr[0].firstname))
        $('[data-selenium-test="property-input-lastname"]').waitForDisplayed({ timeout: 60000 })
        $('[data-selenium-test="property-input-lastname"]').setValue(JSON.stringify(arr[0].lastname))
        $("[data-selenium-test='base-dialog-confirm-btn']").waitForDisplayed({ timeout: 60000 })
        $("[data-selenium-test='base-dialog-confirm-btn']").click()
        browser.pause(3000)
        $("[data-selenium-test='base-dialog-confirm-btn']").waitForDisplayed({ timeout: 60000 })
        $("[data-selenium-test='base-dialog-confirm-btn']").click()
        browser.pause(3000)
        $('#nav-primary-contacts-branch').click()
        $('#nav-secondary-contacts').click()
        browser.pause(10000) 
    // })
    
        browser.url('/')
        login.doLogin(configData.username, configData.password)
        $('#nav-primary-contacts-branch').waitForDisplayed({ timeout: 60000 })
        $('#nav-primary-contacts-branch').click()
        $('#nav-secondary-contacts').waitForDisplayed({ timeout: 60000 })
        $('#nav-secondary-contacts').click()
        $('div.add-control button').waitForDisplayed({ timeout: 60000 })
        $('div.add-control button').click()
        $('#UIFormControl-26').waitForDisplayed({ timeout: 60000 })
        $('#UIFormControl-26').setValue('abcsf2122@xyz.com')
        $('input#UIFormControl-28').waitForDisplayed({ timeout: 60000 })
        $('input#UIFormControl-28').setValue('asds234dc')
        $('#UIFormControl-32').waitForDisplayed({ timeout: 60000 })
        $('#UIFormControl-32').setValue('defsdf')
        $("//button[@data-confirm-button = 'accept']").waitForDisplayed({ timeout: 60000 })
        $("//button[@data-confirm-button = 'accept']").click()
        browser.pause(3000)
        $('#nav-primary-contacts-branch').waitForClickable({ timeout: 3000 });
        $('#nav-primary-contacts-branch').click()
        $('#nav-secondary-contacts').click()
    
    })
    */
    // it('click on checkbox', function(){
    //     browser.url("/");
    //     browser.pause(5000);
    //     loginPage.clickOnCheckBox();
    //     browser.pause(5000);
    //     assert.equal(true, loginPageElements.trueCheckBoxElement.isSelected(), 'Checkbox not selected')
    //     browser.pause(5000);
    // })
