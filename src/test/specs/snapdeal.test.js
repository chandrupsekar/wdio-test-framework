const snapdealPage = require('../../pages/snapdeal.page')
const snapdealElements  = require('../../elements/snapdeal.elements')
const util =  require('../../../util/element.util')


describe('Snapdeal  : ', function(){
    it('Add to cart using search', function(){
        browser.url('https://snapdeal.com/')
        snapdealPage.addUsingSearch()
        browser.pause(2000)
        assert.isTrue(snapdealPage.isPresentInList(snapdealElements.phoneList, 'Zebronics ZEB-COROLLA'), 'The item is not present in cart')
    })
    it('Checking if delivery message is displayed for valid pin', function(){
        browser.url('https://snapdeal.com/')
        snapdealPage.checkingValidPin(snapdealElements.validPin)
        browser.pause(2000)
        assert.isTrue(util.isElementDisplayed(snapdealElements.succefulMessageBox), 'Message was not displayed')
    }) 
    it('Checking if message is displyed for unavailable pin', function(){
        browser.url('https://snapdeal.com/')
        snapdealPage.checkingInvalidPin(snapdealElements.invalidPin)
        browser.pause(2000)
        assert.equal(snapdealElements.unsuccesfulMessage.getText(), 'Item not available at this location, please try another pincode', 'Invalid message was not displayed')
    }) 
})