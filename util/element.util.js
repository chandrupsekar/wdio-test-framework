const constant = require('../config/constants')
const time = constant.WAIT_TIME
//generic methods 
class ElementUtil{
    //*******************ACTIONS********************//

    //method to verify the title of the page    ***
    waitForPageTitle(pageTitle){          
        browser.waitUntil(function(){
            return (browser.getTitle() === pageTitle)
        }, 15000, 'title is not displayed after the given time')
        return browser.getTitle()
    }

    //get page title
    getPageTitle(){
        return browser.getTitle()
    }

    //method to find whether the element is displayed or not  
    isElementDisplayed(element){         
        element.waitForDisplayed(time)
        return element.isDisplayed()
    }

    //method to enter text into a field
    doSetValue(element, value){        
        element.waitForDisplayed(time)
        element.setValue(value)
    }

    //Click on an element
    clickElement(element){      
        this.isElementEnabled(element)
        //element.waitForDisplayed(2000)
        element.click()
    }

    //Double-click on an element
    doubleClickElement(element){
        this.isElementEnabled(element)
        //element.waitForDisplayed(2000)
        element.doubleClick()
    }

    //Return true if the element: exists, is visible, is within viewport, its center is not overlapped with another element, is not disabled.
    isElementClickable(element){
        element.waitForEnabled(time)
        return element.isClickable()
    }

    //true if element selected
    isElementSelected(element){
        element.waitForDisplayed(time)
        return element.isSelected()
    }

    //Get the text content from the element
    getElementText(element){
        element.waitForDisplayed(time)
        return element.getText()
    }

    //scroll into viewport
    scrollElementIntoView(element){        
        element.scrollIntoView()
    }

    //Click on checkbox          **
    clickOnCheckBox(element){                       
        if(this.isElementSelected(element)){
            this.clickElement(element)
        }    
    }  

    //Return true or false if the selected element is enabled.
    isElementEnabled(element){
        element.waitForDisplayed(time)
        return element.isEnabled()
    }

    //Clear a <textarea> or text <input> element’s value
    clearInput(element){
        element.waitForDisplayed(time)
        element.clearValue()
    }

    //Add value to the element concatenate to previous value if any
    addValues(element, value){
        element.waitForDisplayed(time)
        element.addValue(value)      
    }

    //Get source code of element 
    getSourceCode(element){
        element.waitForDisplayed(time)
        return element.getHTML()
    }

    //Get an attribute from a DOM-element based on the attribute name
    getAttributeOfElement(element, attributeName){
        element.waitForDisplayed(time)
        return element.getAttribute(attributeName)
    }

    //Get a css property from a DOM-element selected by given selector. The return value is formatted to be testable
    getCssPropertyOfElement(element, cssProperty){
        element.waitForDisplayed(time)
        return element.getCSSProperty(cssProperty)
    }

    //Determine an element’s location on the page. The point (0, 0) refers to the upper-left corner of the page.
    getElementLocation(element){
        element.waitForDisplayed(time)
        return element.getLocation()
    }

    //get a property of an element
    getElementProperty(element, property){
        element.waitForDisplayed(time)
        return element.getProperty(property)
    }

    //Get the width and height for an element
    getElementSize(element){
        element.waitForDisplayed(time)
        return element.getSize()
    }

    //Get tag name of the element
    getTagNameOfElement(element){
        element.waitForDisplayed(time)
        return element.getTagName()
    }

    //Get the value of a <textarea>, <select> or text <input> found by given selector
    getElementValue(element){
        element.waitForDisplayed(time)
        return element.getValue()
    }

    //Return true if the element is partially visible and within the viewport
    isElementDisplayedInViewport(element){
        return element.isDisplayedInViewport()
    }

    //Returns true if element exists in the DOM
    isElementExisting(element){
        return element.isExisting()
    }

    //Return true if the element currently has focus. If the selector matches multiple elements, true if one of the elements has focus.
    isElementFocused(element){
        element.waitForDisplayed(time)
        return element.isFocused()
    }

    //method to scroll element into view, if not visible
    moveToElement(element){              
        element.waitForDisplayed(time)
        element.moveTo()
    }

    //Select option with a specific value
    selectAttributeByValue(element, attribute, value){
        element.waitForDisplayed(time)
        element.selectByAttribute(attribute, value)
    }

    //Select option with a specific index
    selectElementByIndex(element, index){
        element.waitForDisplayed(time)
        element.selectByIndex(index)
    }

    //Select option with displayed text matching the argument
    selectByText(element, text){
        element.waitForDisplayed(time)
        element.selectByVisibleText(text)
    }
    
    //Access an element inside a given element's shadowRoot
    elementInsideShadow(element, root){
        element.waitForDisplayed(time)
        element.shadow$(root)
    }
    //Access elements inside a given element's shadowRoot
    elementsInsideShadow(element, root){
        element.waitForDisplayed(time)
        element.shadow$$(root)
    }

    //Drag an item to a destination element
    dragAndDropElement(element, target){
        element.waitForDisplayed(time)
        element.dragAndDrop(target)
    }

    //Wait for an element for the provided amount of milliseconds to be clickable or not clickable
    waitClickableElement(element,timeout, reverse, timeoutMsg, interval){
        element.waitForClickable({timeout, reverse, timeoutMsg, interval})
    }

    //Return true if the selected element matches with the provided one
    equals(e1, e2){
        return e1.isEqual(e2)
    }

    //Save a screenshot of an element to a PNG file on your OS
    takeScreenshot(element, filename){
        element.saveScreenshot(filename)
    }

    //***ASSERT METHODS***//
    //returns true if element is true
    validateIfTrue(element, testMsg){
        return assert.isTrue(element, testMsg);
    }

    //returns true if actual and expected values are non-strictly equal (==) 
    validateIfEqual(expectedValue, element, testMsg){
        return assert.equal(expectedValue, element, testMsg)
    }

    //returns true if actual and expected values are non-strict inequal (!=) 
    validateIfNotEqual(actualValue, expectedValue, testMsg){
        return assert.notEqual(actualValue, expectedValue, testMsg)
    }

    //returns true if actual and expected values are strictly equal (===) 
    validateIfStrictEqual(actualValue, expectedValue, testMsg){
        return assert.strictEqual(actualValue, expectedValue, testMsg)
    }

    //returns true if actual and expected values are strictly inequal (!==)
    validateIfNotStrictEqual(actualValue, expectedValue, testMsg){
        return assert.notStrictEqual(actualValue, expectedValue, testMsg)
    }

    //returns true if values are deeply equal
    validateIfDeepEqual(actualValue, expectedValue, testMsg){
        return assert.deepEqual(actualValue, expectedValue, testMsg)
    }

    //returns true if values are not deeply equal
    validateIfNotDeepEqual(actualValue, expectedValue, testMsg){
        return assert.notDeepEqual(actualValue, expectedValue, testMsg)
    }

    //returns true if valueToCheck is strictly greater than (>) valueToBeAbove.
    validateIfGreater(valueToCheck, valueToBeAbove, testMsg){
        return assert.isAbove(valueToCheck, valueToBeAbove, testMsg)
    }
   
    //returns true if valueToCheck is greater than or equal to (>=) valueToBeAtLeast
    validateIfIsAtLeast(valueToCheck, valueToBeAtLeast, testMsg){
        return assert.isAtLeast(valueToCheck, valueToBeAtLeast, testMsg)
    }

    //returns true if valueToCheck is strictly less than (<) valueToBeBelow
    validateIfLess(valueToCheck, valueToBeBelow, testMsg){
        return assert.isBelow(valueToCheck, valueToBeBelow, testMsg)
    }

    //returns true if valueToCheck is less than or equal to (<=) valueToBeAtMost
    validateIfIsAtMost(valueToCheck, valueToBeAtMost, testMsg){
        return assert.isAtMost(valueToCheck, valueToBeAtMost, testMsg)
    }

    //return true if value is true
    validateIfIsTrue(value, testMsg){
        return assert.isTrue(value, testMsg)
    }

    //return true if value is not true
    validateIfIsNotTrue(value, testMsg){
        return assert.isNotTrue(value, testMsg)
    }

    //return true if value is false
    validateIfIsFalse(value, testMsg){
        return assert.isFalse(value, testMsg)
    }

    //return true if value is not false
    validateIfIsNotFalse(value, testMsg){
        return assert.isNotFalse(value, testMsg)
    }

    //return true if value is Null
    validateIfIsNull(value, testMsg){
        return assert.isNull(value, testMsg)
    }

    //return true if value is not Null
    validateIfIsNotNull(value, testMsg){
        return assert.isNotNull(value, testMsg)
    }

    //return true if value is NaN Not-a-Number
    validateIfIsNaN(value, testMsg){
        return assert.isNaN(value, testMsg)
    }

    //return true if value is not NaN Not-a-Number
    validateIfIsNotNaN(value, testMsg){
        return assert.isNotNaN(value, testMsg)
    }
    
    //return true if the target is neither null nor undefined
    validateIfExists(value, testMsg){
        return assert.exists(value, testMsg)
    }

    //return true if the target is either null or undefined.
    validateIfNotExists(value, testMsg){
        return assert.notExists(value, testMsg)
    }

    //return true if value is Undefined
    validateIfIsUndefined(value, testMsg){
        return assert.isUndefined(value, testMsg)
    }

    //return true if value is not undefined
    validateIfIsDefined(value, testMsg){
        return assert.isDefined(value, testMsg)
    }

    //return true if value is function
    validateIfFunction(value, testMsg){
        return assert.isFunction(value, testMsg)
    }

    //return true if value is not function
    validateIfNotFunction(value, testMsg){
        return assert.isNotFunction(value, testMsg)
    }

    //return true if value is an object of type ‘Object’
    validateIfIsObject(value, testMsg){
        return assert.isObject(value, testMsg)
    }

    //return true if value is not an object of type ‘Object’ 
    validateIfIsNotObject(value, testMsg){
        return assert.isNotObject(value, testMsg)
    }

    //return true if value is an Array
    validateIfArray(value, testMsg){
        return assert.isArray(value, testMsg)
    }

    //return true if value is not Array 
    validateIfNotArray(value, testMsg){
        return assert.isNotArray(value, testMsg)
    }

    //return true if value is a string
    validateIfString(value, testMsg){
        return assert.isString(value, testMsg)
    }

    //return true if value is not string
    validateIfNotString(value, testMsg){
        return assert.isNotString(value, testMsg)
    }

    //return true if value is a Number
    validateIfNumber(value, testMsg){
        return assert.isNumber(value, testMsg)
    }

    //return true if value is not Number
    validateIfNotNumber(value, testMsg){
        return assert.isNotNumber(value, testMsg)
    }

    //return true if value is finite number
    validateIfFinite(value, testMsg){
        return assert.isFinite(value, testMsg)
    }

    //return true if value is Boolean
    validateIfBoolean(value, testMsg){
        return assert.isBoolean(value, testMsg)
    }

    //return true if value is not Boolean
    validateIfNotBoolean(value, testMsg){
        return assert.isNotBoolean(value, testMsg)
    }

    //return true if value’s type is name
    validateTypeOf(value, name, testMsg){
        return assert.isBoolean(value, name, testMsg)
    }

    //return true if value’s type is not name
    validateNotTypeOf(value, name, testMsg){
        return assert.isNotBoolean(value, name, testMsg)
    }

    //return true if value is an instance of constructor
    validateInstanceOf(value, constructor, testMsg){
        return assert.isBoolean(value, constructor, testMsg)
    }

    //return true if value is not an instance of constructor
    validateNotInstanceOf(value, constructor, testMsg){
        return assert.isNotBoolean(value, constructor, testMsg)
    }

}

module.exports  = new ElementUtil()
