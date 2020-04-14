const constant = require('../config/constants')
//generic methods 
class ElementUtil{
    doClick(element){      //mehtod to click on a particular element
        console.log(typeof element)
        element.waitForDisplayed({ timeout: 60000 })
        element.click()
    }

    doSetValue(element, value){   
        // console.log('entered doSet')     //method to enter text into a field
        // console.log('value type' + typeof value)
        // console.log(element)
        // console.log('type of element' + typeof element)
        element.waitForDisplayed({ timeout: 60000 })
        element.setValue(value)
        // console.log('exiting')
    }

    doGetText(element){           //method to get text from an element
        element.waitForDisplayed({ timeout: 60000 })
        return element.getText()
    }

    doIsDisplayed(element){        //method to find whether the element is displayed or not   
        element.waitForDisplayed({ timeout: 60000 })
        return element.isDisplayed()
    }

    doGetPageTitle(pageTitle){          //method to verify the title of the page
        browser.waitUntil(function(){
            return (browser.getTitle() === pageTitle)
        }, 60000, 'title is not displayed after the given time')
        return browser.getTitle()
    }
}

module.exports  = new ElementUtil()
