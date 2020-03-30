const constant = require('../config/constants')
class ElementUtil{
    doClick(element){
        element.waitForDisplayed()
        element.click()
    }
    doSetValue(element){
        element.waitForDisplayed()
        element.setValue(value)
    }
    doGetText(element){
        element.waitForDisplayed()
        return element.getText()
    }
    doGetPageTitle(pageTitle){
        browser.waitUntil(()=>{
            return (browser.getTitle()===pageTitle)
        }, 10000, 'title is not displayed')
        return browser.getTitle()
    }
    doIsDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }

}

module.exports = new ElementUtil()