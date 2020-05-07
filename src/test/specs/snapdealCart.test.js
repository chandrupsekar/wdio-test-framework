const snapdealPage = require('../../pages/snapdeal.page')
const snapdealElements  = require('../../elements/snapdeal.elements')
const util =  require('../../../util/element.util')


describe('Snapdeal  : ', function(){
    this.retries(3)
    it('Add using menu', function(){
        browser.url('https://snapdeal.com/')
        snapdealPage.addUsingMenu()
        browser.pause(2000)
        assert.isTrue(snapdealPage.isPresentInList(snapdealElements.cartList, 'OWN'))
    })
    it('Adding multiple items to cart', function(){
        browser.url('https://snapdeal.com/')
        snapdealPage.addMultiple()
        list = snapdealElements.multipleItem
        browser.pause(2000)
        for (var i in list){
            expect(snapdealPage.isPresentInList(snapdealElements.cartList, list[i])).to.be.true
        }
    }) 
    it('Comparing two phones', function(){
        browser.url('https://snapdeal.com')
        snapdealPage.compareTwoPhones()
        browser.pause(2000)
        for (var i in snapdealElements.multiplePhone){
            console.log(snapdealPage.isPresentInList(snapdealElements.phoneList, snapdealElements.multiplePhone[i]))
        }
    })  
})