const constant = require('../config/constants')
//generic methods 
class ElementUtil{
    doClick(element){      //mehtod to click on a particular element
        element.waitForDisplayed()
        element.click()
    }

    doSetValue(element, value){        //method to enter text into a field
        element.waitForDisplayed()
        element.setValue(value)
    }

    doGetText(element){           //method to get text from an element
        element.waitForDisplayed()
        return element.getText()
    }

    doIsDisplayed(element){        //method to find whether the element is displayed or not   
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    doGetPageTitle(pageTitle){          //method to verify the title of the page
        browser.waitUntil(function(){
            return (browser.getTitle() === pageTitle)
        }, 15000, 'title is not displayed after the given time'
    )
        return browser.getTitle()
    }

    doScrollIntoView(element){        //scroll into viewport
        element.scrollIntoView()
    }
   
    moveToElement(element){              //method to scroll element into view, if not visible
        element.waitForDisplayed()
        element.moveTo()
    }
}

module.exports  = new ElementUtil()
