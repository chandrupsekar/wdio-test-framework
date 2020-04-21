const contactspageElements = require('../elements/contactspage.elements')
const elementUtil = require('../../util/element.util')
const login = require('./login.page')
const db = require('../../util/database.util')
const dbConfig = require('../../config/database.config')
const loginPage = require('./login.page')
const configData = require('../../config/config')
const homePageElements = require('../elements/homepage.elements')
class ContactsPage{
    createNewContact = async function(tableName){
        elementUtil.doClick(homePageElements.contactLink)
        elementUtil.doClick(homePageElements.secondaryContact)
        elementUtil.doClick(contactspageElements.newContactLink)

        // var arr =[]
        await db.retrieve('contact', result=>{
            console.log(result)
            elementUtil.doSetValue(contactspageElements.userName, result[0].username)
            // elementUtil.doSetValue(contactspageElements.firstName, result[0].firstname)
            // elementUtil.doSetValue(contactspageElements.lastName, result[0].lastname)
        })
        // console.log(arr)

        // console.log('inside createNewContact')
        // //going to the contact page
        // elementUtil.doClick(homePageElements.contactLink) //$('#nav-primary-contacts-branch').waitForDisplayed({ timeout: 60000 }) $('#nav-primary-contacts-branch').click()
        // elementUtil.doClick(homePageElements.secondaryContact)//$('#nav-secondary-contacts').waitForDisplayed({ timeout: 60000 })  $('#nav-secondary-contacts').click()
        
        // //clicking new button
        // elementUtil.doClick(contactspageElements.newContactLink)//$('div.add-control button').waitForDisplayed({ timeout: 60000 }) $('div.add-control button').click()
        // browser.pause(10000)
        // var arr =  db.retrieve(tableName)
        // console.log('inside contact page')
        // console.log('arr: ')
        // console.log(arr)
        
        // inserting values
        // console.log(contactspageElements.userName)
        // elementUtil.doSetValue(contactspageElements.userName, arr[0].username)//$('[data-selenium-test="property-input-email"]').waitForDisplayed({ timeout: 60000 }) $('[data-selenium-test="property-input-email"]').setValue(result.username)
        
        // elementUtil.doSetValue(contactspageElements.firstName, arr[0].firstname)//$('[data-selenium-test="property-input-firstname"]').waitForDisplayed({ timeout: 60000 }) $('[data-selenium-test="property-input-firstname"]').setValue(result.firstname)
        // 
        //$('[data-selenium-test="property-input-lastname"]').waitForDisplayed({ timeout: 60000 })$('[data-selenium-test="property-input-lastname"]').setValue(result.lastname)
        
        // console.log('reached the contact creation')
        // //creating contact
        // elementUtil.doClick(  contactspageElements.createContactButton ); //$("[data-selenium-test='base-dialog-confirm-btn']").waitForDisplayed({ timeout: 60000 })$("[data-selenium-test='base-dialog-confirm-btn']").click()
        // browser.pause(10000)
        // //again goin to the contact page
        // elementUtil.doClick(homePageElements.contactLink)//$('#nav-primary-contacts-branch').click()
        // elementUtil.doClick(homePageElements.secondaryContact) //$('#nav-secondary-contacts').click()
        // browser.pause(20000) 
    }
}
module.exports = new ContactsPage()



/*createNewContact = async ()=>{
        var arr = [];
        // elementUtil.doClick(homePageElements.contactLink) //$('#nav-primary-contacts-branch').waitForDisplayed({ timeout: 60000 }) $('#nav-primary-contacts-branch').click()
        // elementUtil.doClick(homePageElements.secondaryContact)//$('#nav-secondary-contacts').waitForDisplayed({ timeout: 60000 })  $('#nav-secondary-contacts').click()
        // elementUtil.doClick(contactspageElements.newContactLink)//$('div.add-control button').waitForDisplayed({ timeout: 60000 }) $('div.add-control button').click()
        try{ 
            await  db.retrieve(configData.tableName).then(result=>{
                //console.log(result)
                arr = result
            }).catch(err=>{
                console.log(err)
            })
            loginPage.doLogin(configData.username, configData.password)
            console.log('array inside createcontact')
            console.log(arr)
            arr[0].utils
            elementUtil.doClick() //$('#nav-primary-contacts-branch').waitForDisplayed({ timeout: 60000 }) $('#nav-primary-contacts-branch').click()
     
            elementUtil.doClick(homePageElements.secondaryContact)//$('#nav-secondary-contacts').waitForDisplayed({ timeout: 60000 })  $('#nav-secondary-contacts').click()
            elementUtil.doClick(contactspageElements.newContactLink)//$('div.add-control button').waitForDisplayed({ timeout: 60000 }) $('div.add-control button').click()

        }catch(err){
            console.log(err)
        }


*/
/*
createNewContact = async (tableName)=>{
            elementUtil.doClick(homePageElements.contactLink) //$('#nav-primary-contacts-branch').waitForDisplayed({ timeout: 60000 }) $('#nav-primary-contacts-branch').click()
            elementUtil.doClick(homePageElements.secondaryContact)//$('#nav-secondary-contacts').waitForDisplayed({ timeout: 60000 })  $('#nav-secondary-contacts').click()
            elementUtil.doClick(contactspageElements.newContactLink)//$('div.add-control button').waitForDisplayed({ tim
            createNewContact = async (tableName)=>{          elementUtil.doClick(homePageElements.contactLink) //$('#nav-primary-contacts-branch').waitForDisplayed({ timeout: 60000 }) $('#nav-primary-contacts-branch').click()         elementUtil.doClick(homePageElements.secondaryContact)//$('#nav-secondary-contacts').waitForDisplayed({ timeout: 60000 })  $('#nav-secondary-contacts').click()          elementUtil.doClick(contactspageElements.newContactLink)//$('div.add-control button').waitForDisplayed({ tim
            var arr = [];         console.log("test");         arr = await db.retrieve(configData.tableName)         console.log("mainresult"+arr);

// console.log(arr[0].username + ' '+ arr[0].firstname + ' ' + arr[0].lastname)
        // elementUtil.doSetValue($('[data-selenium-test="property-input-email"]'), JSON.stringify(result[0].username))//$('[data-selenium-test="property-input-email"]').waitForDisplayed({ timeout: 60000 }) $('[data-selenium-test="property-input-email"]').setValue(result.username)
        // elementUtil.doSetValue($('[data-selenium-test="property-input-firstname"]'), JSON.stringify(result[0].firstname))//$('[data-selenium-test="property-input-firstname"]').waitForDisplayed({ timeout: 60000 }) $('[data-selenium-test="property-input-firstname"]').setValue(result.firstname)
        // elementUtil.doSetValue($('[data-selenium-test="property-input-lastname"]'), JSON.stringify(result[0].lastname))//$('[data-selenium-test="property-input-lastname"]').waitForDisplayed({ timeout: 60000 })$('[data-selenium-test="property-input-lastname"]').setValue(result.lastname)
        // elementUtil.doClick(  contactspageElements.createContactButton ); //$("[data-selenium-test='base-dialog-confirm-btn']").waitForDisplayed({ timeout: 60000 })$("[data-selenium-test='base-dialog-confirm-btn']").click()
        // browser.pause(10000)
        // elementUtil.doClick(homePageElements.contactLink)//$('#nav-primary-contacts-branch').click()
        // elementUtil.doClick(homePageElements.secondaryContact) //$('#nav-secondary-contacts').click()
        // browser.pause(20000)




        // elementUtil.doSetValue($('[data-selenium-test="property-input-email"]'), JSON.stringify(arr[0].username))//$('[data-selenium-test="property-input-email"]').waitForDisplayed({ timeout: 60000 }) $('[data-selenium-test="property-input-email"]').setValue(result.username)
        // elementUtil.doSetValue($('[data-selenium-test="property-input-firstname"]'), JSON.stringify(arr[0].firstname))//$('[data-selenium-test="property-input-firstname"]').waitForDisplayed({ timeout: 60000 }) $('[data-selenium-test="property-input-firstname"]').setValue(result.firstname)
        // elementUtil.doSetValue($('[data-selenium-test="property-input-lastname"]'), JSON.stringify(arr[0].lastname))//$('[data-selenium-test="property-input-lastname"]').waitForDisplayed({ timeout: 60000 })$('[data-selenium-test="property-input-lastname"]').setValue(result.lastname)
        /*
        createNewContact = async (tableName)=>{
        // elementUtil.doClick(homePageElements.contactLink) //$('#nav-primary-contacts-branch').waitForDisplayed({ timeout: 60000 }) $('#nav-primary-contacts-branch').click()
        // elementUtil.doClick(homePageElements.secondaryContact)//$('#nav-secondary-contacts').waitForDisplayed({ timeout: 60000 })  $('#nav-secondary-contacts').click()
        // elementUtil.doClick(contactspageElements.newContactLink)//$('div.add-control button').waitForDisplayed({ timeout: 60000 }) $('div.add-control button').click()
        var arr = [];
        // arr = await db.retrieve(configData.tableName)

        await db.retrieve(dbConfig.tableName).then(result=>{
            //console.log(result)
            arr = result;
            console.log(result.username + ' '+ result.firstname + ' ' + result.lastname)
            // elementUtil.doSetValue(contactspageElements.userName, JSON.stringify(result[0].username))//$('[data-selenium-test="property-input-email"]').waitForDisplayed({ timeout: 60000 }) $('[data-selenium-test="property-input-email"]').setValue(result.username)
            // elementUtil.doSetValue(contactspageElements.firstName, JSON.stringify(result[0].firstname))//$('[data-selenium-test="property-input-firstname"]').waitForDisplayed({ timeout: 60000 }) $('[data-selenium-test="property-input-firstname"]').setValue(result.firstname)
            // elementUtil.doSetValue(contactspageElements.lastName, JSON.stringify(result[0].lastname))//$('[data-selenium-test="property-input-lastname"]').waitForDisplayed({ timeout: 60000 })$('[data-selenium-test="property-input-lastname"]').setValue(result.lastname)
        }).catch(err=>{
            console.log(err)
        })
        console.log('arr: ')
        console.log(arr)
        // elementUtil.doClick(  contactspageElements.createContactButton ); //$("[data-selenium-test='base-dialog-confirm-btn']").waitForDisplayed({ timeout: 60000 })$("[data-selenium-test='base-dialog-confirm-btn']").click()
        // browser.pause(10000)
        // elementUtil.doClick(homePageElements.contactLink)//$('#nav-primary-contacts-branch').click()
        // elementUtil.doClick(homePageElements.secondaryContact) //$('#nav-secondary-contacts').click()
        // browser.pause(20000)      
    }*/

    
    