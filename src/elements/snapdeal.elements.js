class SnapdealElements{
    // get searchBox(){        return $("#twotabsearchtextbox")}
    // get searchButton(){     return $('span.nav-search-submit-text')}   
    // get searchItem(){       return $("//span[contains(text(), 'New Lenovo Ideapad S145 1')]")    } 
    searchText  = 'AgroShan Quinoa flour'
    message =  'Delivery in'
    validPin = '500001'
    invalidPin = '194103'
    multipleItem = [ 'Redmi 8 ( 64GB , 4 GB ) Red', 'Hangup Navy Silk Blend Kurta Pyjama Set', 'HP Pavilion 14 14-ce3024TX 2019 14-inch', 'Columbus TB-1012 Navy Running Shoes']
    
    //adding using searchBox
    get searchBox(){        return $("#inputValEnter")}
    get searchButton(){     return $("[class='searchformButton col-xs-4 rippleGrey']")    }
    get searchItem(){       return $("//p[contains(text(), 'AgroShan Quinoa Flour 960 gm')]")    }
    get addToCart(){        return $("#add-cart-button-id")}
    get succefulMessageBox(){       return $('#deliveryOptionsTooltip')}
    get unsuccesfulMessage(){       return $("#pdp-pincode-rp > div.check-avail-pin-inner.col-xs-24.reset-padding > div:nth-child(3)")}
    get redmiPhone(){       return $("//p[contains(text(), 'Redmi 8 ( 64GB , 4 GB ) Red')]")}

    //adding computer using menu
    get computersOption(){  return $("//span[contains(text(),  'Computers & Gaming')]")}
    get hpLink(){           return $("//span[contains(text(), 'HP')]")}
    get lenovoLink(){       return $("//span[contains(text(), 'Lenovo')]")}
    get lenovoLaptop(){     return $("//p[contains(text(), 'Lenovo Ideapad 330s')]")   }
    get laptopLink(){       return $("//p[contains(text(), 'HP Pavilion 14 14-ce3024TX 2019 14-inch')]")} 
    get pyjama(){           return $("//p[contains(text(), 'Hangup Navy Silk Blend Kurta Pyjama Set')]")}
    get columbus(){         return $("//p[contains(text(), 'Columbus TB-1012 Navy Running Shoes')]")}

    //adding earphones to the cart 
    get electronicsLink(){  return $("#leftNavMenuRevamp > div.leftNavWrapperRevamp > div.leftNavigationLeftContainer.expandDiv > ul > li:nth-child(4) > a > span.catText")}
    get earPhonesLink(){    return $("//span[contains(text(), 'Headphone & Earphones')]//parent::a//parent::p//following-sibling::p[2]//a//span")}
    get zebronicsEarphone(){return $("//p[@title='Zebronics ZEB-COROLLA In Ear Wired With Mic Headphones/Earphones']")    }
    
    //adding multiple values of an item
    get kitchenLink(){      return $("//span[contains(text(), 'Home & Kitchen')]")}
    get dogSupplies(){      return $("//span[contains(text(), 'Dog Supplies')]")}
    get pedigree(){         return $("//p[@title='Pedigree Adult Dog Food (High Protein variant) – Chicken, Egg & Rice, 10 Kg Pack']")}
    
    //common to all
    get menuIconLoader(){   return $('div.menuIconBar')  }
    get cartButton(){       return $("//i[@class='sd-icon sd-icon-cart-icon-white-2']")}
    get item(){             return $("#cartProductContainer > div > div.cart-item-container.row > div.col-xs-10.products > div > div.col-xs-18 > span.product-name > a")}
    get closeCart(){        return $("#rtbScriptContainer > div.cart-heading.clearfix > span > i")    }
    get cartList(){         return $$("#rtbScriptContainer > div.cart-items-list.clearfix > ul > li > div > div > div > a")    }
    get pincodeCheck(){     return $("#pincode-check")}
    get pincodeButton(){    return $("#pincode-check-bttn")}
    get pincodeMessage(){   return $("//div[contains(text() , 'Item not available at this location, please try another pincode')]")}

}
module.exports = new SnapdealElements()
