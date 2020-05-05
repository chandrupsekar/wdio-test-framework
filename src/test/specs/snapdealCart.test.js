const snapdealPage = require('../../pages/sanpdeal.page')
const snapdealElements  = require('../../elements/snapdeal.elements')
const util =  require('../../../util/element.util')


describe('Snapdeal  : ', function(){
    it('test', function(){
        browser.url('https://snapdeal.com')
        browser.pause(1200000)
    })
    // it('Add using menu', function(){
    //     browser.url('https://snapdeal.com/')
    //     // if($('#pushDenied').isClickable())
    //     //     $("#pushDenied").click()
    //     snapdealPage.addUsingMenu()
    //     browser.pause(2000)
    //     assert.isTrue(snapdealPage.isPresentInCart(snapdealElements.cartList, 'Lenovo Ideapad 330s'))
    // })
    // it('Adding multiple items to cart', function(){
    //     browser.url('https://snapdeal.com/')
    //     snapdealPage.addMultiple()
    //     list = snapdealElements.multipleItem
    //     browser.pause(2000)
    //     for (var i in list){
    //         console.log(snapdealPage.isPresentInCart(snapdealElements.cartList, list[i]))
    //     }
    // })   
})