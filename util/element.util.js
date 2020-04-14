const constant = require('../config/constants')
//generic methods 
class ElementUtil{
    // doClick(element){      //mehtod to click on a particular element
    //     element.waitForDisplayed()
    //     element.click()
    // }
    //Click on an element
    clickElement(element){      //mehtod to click on a particular element
        element.waitForDisplayed(1000)
        element.click()
    }

    //method to enter text into a field
    doSetValue(element, value){        
        element.waitForDisplayed()
        element.setValue(value)
    }

    // doGetText(element){           //method to get text from an element
    //     element.waitForDisplayed()
    //     return element.getText()
    // }
    //Get the text content from the element
    getElementText(element){
        element.waitForDisplayed()
        return element.getText()
    }

    //method to find whether the element is displayed or not  
    isElementDisplayed(element){         
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    //method to verify the title of the page
    getPageTitle(pageTitle){          
        browser.waitUntil(function(){
            return (browser.getTitle() === pageTitle)
        }, 15000, 'title is not displayed after the given time'
    )
        return browser.getTitle()
    }

     //scroll into viewport
     scrollElementIntoView(element){        
        element.scrollIntoView()
    }

    
   
    

    

    // //works only in web and webviews, it doesn't work in mobile app native context.
    // elementClickable(element){
    //     return element.isClickable()
    // }

    // //Return true or false if the selected DOM-element is enabled.
    // elementEnabled(element){
    //     return element.isEnabled()
    // }
//****                   ****//
    // elementWaitUntil(element, condition, timeout, timeoutMsg){
    //     element.waitUntil(condition, timeout, timeoutMsg)
    // }


    //***** ACTIONS *****//
    //Add value to the element concatenate to previous value if any
    addValues(element, value){
        element.waitForDisplayed()
        element.addValue(value)      
    }

    //Clear a <textarea> or text <input> element’s value
    clearInput(element){
        element.waitForDisplayed()
        element.clearValue()
    }


    //Double-click on an element
    doubleClickElement(element){
        element.waitForDisplayed()
        element.doubleClick()
    }

    //Drag an item to a destination element
    dragAndDropElement(element, target){
        element.waitForDisplayed()
        element.dragAndDrop(target)
    }

    //Get an attribute from a DOM-element based on the attribute name
    getAttributeOfElement(element, attributeName){
        element.waitForDisplayed()
        return element.getAttribute(attributeName)
    }

    //Get a css property from a DOM-element selected by given selector. The return value is formatted to be testable
    getCssPropertyOfElement(element, cssProperty){
        element.waitForDisplayed()
        return element.getCSSProperty(cssProperty)
    }

    //Get source code of element 
    getSourceCode(element){
        element.waitForDisplayed()
        return element.getHTML()
    }

    //Determine an element’s location on the page. The point (0, 0) refers to the upper-left corner of the page.
    getElementLocation(element){
        element.waitForDisplayed()
        return element.getLocation()
    }

    //get a property of an element
    getElementProperty(element, property){
        element.waitForDisplayed()
        return element.getProperty(property)
    }

    //Get the width and height for an element
    getElementSize(element){
        element.waitForDisplayed()
        return element.getSize()
    }

    //Get tag name of the element
    getTagNameOfElement(element){
        element.waitForDisplayed()
        return element.getTagName()
    }


    //Get the value of a <textarea>, <select> or text <input> found by given selector
    getElementValue(element){
        element.waitForDisplayed()
        return element.getValue()
    }

    //Return true if the element: exists, is visible, is within viewport, its center is not overlapped with another element, is not disabled.
    isElementClickable(element){
        element.waitForDisplayed()
        return element.isClickable()
    }

    //Return true if the element is partially visible and within the viewport
    isElementDisplayedInViewport(element){
        return element.isDisplayedInViewport()
    }

    //Return true or false if the selected element is enabled.
    isElementEnabled(element){
        element.waitForDisplayed()
        return element.isEnabled()
    }

    //Return true if the selected element matches with the provided one
    equals(e1, e2){
        return e1.isEqual(e2)
    }

    //Returns true if element exists in the DOM
    isElementExisting(element){
        return element.isExisting()
    }

    //Return true if the element currently has focus. If the selector matches multiple elements, true if one of the elements has focus.
    isElementFocused(element){
        element.waitForDisplayed()
        return element.isFocused()
    }

    //true if element selected
    isElementSelected(element){
        element.waitForDisplayed()
        return element.isSelected()
    }

    //method to scroll element into view, if not visible
    moveToElement(element){              
        element.waitForDisplayed()
        element.moveTo()
    }

    //Save a screenshot of an element to a PNG file on your OS
    takeScreenshot(element, filename){
        element.saveScreenshot(filename)
    }

   
    //Select option with a specific value
    selectAttributeByValue(element, attribute, value){
        element.selectByAttribute(attribute, value)
    }

    //Select option with a specific index
    selectElementByIndex(element, index){
        element.selectByIndex(index)
    }

    //Select option with displayed text matching the argument
    selectByText(element, text){
        element.selectByVisibleText(text)
    }
    
    //Access an element inside a given element's shadowRoot
    elementInsideShadow(element, root){
        element.shadow$(root)
    }
    //Access elements inside a given element's shadowRoot
    elementsInsideShadow(element, root){
        element.shadow$$(root)
    }

    //Wait for an element for the provided amount of milliseconds to be clickable or not clickable
    waitClickableElement(element,timeout, reverse, timeoutMsg, interval){
        element.waitForClickable({timeout, reverse, timeoutMsg, interval})
    }

    //Wait for an element for the provided amount of milliseconds to be displayed or not displayed
    waitForElementDisplayed(element, timeout, reverse, timeoutMsg, interval){
        element.waitForDisplayed({timeout, reverse, timeoutMsg, interval })
    }

    //Wait for an element (selected by css selector) for the provided amount of milliseconds to be (dis/en)abled
    waitElementForEnabled(element, timeout, reverse, timeoutMsg, interval ){
        element.waitForEnabled({ timeout, reverse, timeoutMsg, interval })
    }

    //Wait for an element for the provided amount of milliseconds to be present within the DOM
    waitElementForExists(element, timeout, reverse, timeoutMsg, interval){
        element.waitForExist({ timeout, reverse, timeoutMsg, interval })
    }

    //It expects a condition and waits until that condition is fulfilled with a truthy value
    waitElementUntil(element, options, timeout, timeoutMsg, interval ){
        element.waitUntil({ options, timeout, timeoutMsg, interval })
    }
}

module.exports  = new ElementUtil()
