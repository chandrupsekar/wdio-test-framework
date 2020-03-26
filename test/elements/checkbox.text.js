const internetPage = require('../../pages/internetPage')

describe('handling checkboxes', function(){

    it('check page url', ()=>{
        browser.url('http://the-internet.herokuapp.com/') 
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/')
        //expect(browser.getUrl().equals(`${browser.options.baseUrl}`))
    })

    it('checkbox page header', ()=>{
        browser.url('http://the-internet.herokuapp.com/') 
        internetPage.clickOnLink(6)
        internetPage.h3Header.waitForDisplayed()
        const text = internetPage.h3Header.getText()
        expect(text).equals('Checkboxes')
    })
    it('should ', ()=>{
        browser.url('http://the-internet.herokuapp.com/')
        internetPage.clickOnLink(6)
        browser.pause(5000)
        internetPage.h3Header.waitForDisplayed();
        internetPage.clickOnCheckbox(1)
        
        browser.pause(5000)
        expect(internetPage.getCheckBoxElement(1).isSelected()).equals(true);
    })
})