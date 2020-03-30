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
    doGetPageTitle(){
        return browser.getTitle()
    }
}

module.exports = new ElementUtil()