const snapdealElements = require('../elements/snapdeal.elements')
const browserUtil = require('../../util/browser.util')
const util = require('../../util/element.util')
class SnapdealPage{
    addUsingSearch(){
        util.doSetValue(snapdealElements.searchBox, 'Zebronics ZEB-COROLLA') // put value in the search Box
        util.clickElement(snapdealElements.searchButton)
        util.clickElement(snapdealElements.zebronicsEarphone)
        browserUtil.switchToTab('Zebronics ZEB-COROLLA')  // switch to the child window
        this.addToCart()
        this.goToCart()
    }
    addUsingMenu(){
        util.moveToElement(snapdealElements.computersOption)
        //util.moveToElement(snapdealElements.hpLink)
        util.moveToElement(snapdealElements.LenovoLink)
        util.clickElement(snapdealElements.LenovoLink)
        util.clickElement(snapdealElements.lenovoLaptop)
        browserUtil.switchToTab('Lenovo Ideapad 330s')
        this.addToCart()
        this.goToCart()   
    }
    addMultiple(){
        util.doSetValue(snapdealElements.searchBox, 'Redmi 8 ( 64GB , 4 GB ) Red') // put value in the search Box
        util.clickElement(snapdealElements.searchButton)//click the searchButton
        util.clickElement(snapdealElements.redmiPhone)//click the searchItem
        browserUtil.switchToTab('Redmi 8 ( 64GB , 4 GB ) Red')  // switch to the child window
        this.addToCart()//add to the cart

        util.moveToElement(snapdealElements.menuIconLoader)
        util.moveToElement(snapdealElements.computersOption)
        util.clickElement(snapdealElements.hpLink)
        util.clickElement(snapdealElements.laptopLink)
        browserUtil.switchToTab('HP Pavilion 14 14-ce3024TX')
        this.addToCart()

        util.doSetValue(snapdealElements.searchBox, 'Columbus TB-1012 Navy Running Shoes') // put value in the search Box
        util.clickElement(snapdealElements.searchButton)//click the searchButton
        util.clickElement(snapdealElements.columbus)
        browserUtil.switchToTab("Columbus TB-1012 Navy Running Shoes")
        this.addToCart()

        util.doSetValue(snapdealElements.searchBox, 'Hangup Navy Silk Blend Kurta Pyjama Set') // put value in the search Box
        util.clickElement(snapdealElements.searchButton)
        util.clickElement(snapdealElements.pyjama)
        browserUtil.switchToTab('Hangup Navy Silk Blend Kurta Pyjama Set')
        this.addToCart()
        this.goToCart()
    }
    checkingValidPin(pin){
        util.doSetValue(snapdealElements.searchBox, snapdealElements.searchText) // put value in the search Box
        util.clickElement(snapdealElements.searchButton)//click the searchButton
        util.clickElement(snapdealElements.searchItem)//click the searchItem
        browserUtil.switchToTab('AgroShan Quinoa flour')  // switch to the child window
        util.doSetValue(snapdealElements.pincodeCheck, pin)//setting the value for pincode
        util.clickElement(snapdealElements.pincodeButton)//clicking on check button
    }

    checkingInvalidPin(pin){
        util.doSetValue(snapdealElements.searchBox, 'Pedigree Adult Dog Food') // put value in the search Box
        util.clickElement(snapdealElements.searchButton)//click the searchButton
        util.clickElement(snapdealElements.pedigree)
        browserUtil.switchToTab("Pedigree Adult Dog Food (High Protein variant)")
        util.doSetValue(snapdealElements.pincodeCheck, pin)//setting the value for pincode
        util.clickElement(snapdealElements.pincodeButton)//clicking on check button
    }
    isPresent(element, itemName){
        var str = element.getText()
        if(str.includes(itemName))
            return true
        else
            return false
    }
    isPresentInCart(elements, itemName){
        var listOfElements = elements.map(link=>link.getText())
        for(var i in listOfElements){
            var str = listOfElements[i]
            if(str.includes(itemName))
                return true
        }
        return false
    }
    addToCart(){
        util.clickElement(snapdealElements.addToCart)
    }
    goToCart(){
        util.clickElement(snapdealElements.cartButton)
    }
}
module.exports = new SnapdealPage()
