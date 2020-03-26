const blazePage = require('../../pages/blazemeter');

describe('blaze page elements handle', ()=>{
    it('get text of all main links', ()=>{
        browser.url('https://www.blazemeter.com/');
        blazePage.getTextForLi;
        blazePage.useCasesElementsText;
        console.log('third link is : ', blazePage.specificChildElement(3).getText());
    
        blazePage.getSpecificChildElement(4);
    
    })

    it('main heading exist', ()=>{
        console.log('Is displayed : ', blazePage.mainHeader.isDisplayed());
    })
})