const snapdealPage = require('../../pages/sanpdeal.page')
const snapdealElements  = require('../../elements/snapdeal.elements')
const util =  require('../../../util/element.util')


describe('Snapdeal  : ', function(){
    it('Add to cart using search', function(){
        browser.url('https://snapdeal.com/')
        snapdealPage.addUsingSearch()
        browser.pause(2000)
        assert.isTrue(snapdealPage.isPresent(snapdealElements.item, 'Zebronics ZEB-COROLLA'), 'The item is not present in cart')
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
// var arr = $$("#rtbScriptContainer > div.cart-items-list.clearfix > ul > li > div > div > div > a").map(link=>link.getText())
        // console.log('printing arr')
        // console.log(arr)
        // listItem  = sanpdealElements.cartList
        //snapdealElements.cartList.forEach(link=>console.log(link.getText()))
        //console.log(arr)//$$("#rtbScriptContainer > div.cart-items-list.clearfix > ul > li > div.cart-minh.col-xs-5 > div:nth-child(1) > div > a")
        
        // for(var  i in arr)
        //     console.log(arr[i])
        // while($(`#rtbScriptContainer > div.cart-items-list.clearfix > ul > li:nth-child(${i}) > div > div:nth-child(1) > div > a`).isDisplayed){
        //     arr.push($(`#rtbScriptContainer > div.cart-items-list.clearfix > ul > li:nth-child(${i}) > div > div:nth-child(1) > div > a`).getText())
        //     i++




// snapdealPage.

        // $("#inputValEnter").setValue('AgroShan Quinoa flour')
        // $("[class='searchformButton col-xs-4 rippleGrey']").click()
        // $("//p[contains(text(), 'AgroShan Quinoa Flour 960 gm')]").click()
        // browser.pause(10000)
        // var parentGUID = browser.getWindowHandle()
        // var allGUID = browser.getWindowHandles()//browser.windowHandles()        
        // //console.log('printing window handles')
        // //console.log(allGUID);
        // // var window1 = windowHandles.value[0];
        // // var window2 = windowHandles.value[1];
        // // var title1 = browser.window(window1).getTitle();
        // // console.log(title1); // title of one.html
        // // var title2 = browser.window(window2).getTitle();
        // // console.log(title2);
        // console.log("Total Windows : "+allGUID.length);
		// // iterate the values in the set
        // for(var i in allGUID){
		// 	// one enter into if blobk if the GUID is not equal to parent window's GUID
		// 	if(allGUID[i] != parentGUID){
		// 		// switch to the guid
		// 		browser.switchToWindow(allGUID[i]);
		// 		// break the loop
		// 		break;
		// 	}
		// }