const homepageElements = require('../elements/homepage.elements')
const elementUtil = require('../../util/element.util')

class HomePage{
    clickOnContactsLink(){
        elementUtil.doClick(homepageElements.contactLink)
    }
}
module.exports = new HomePage()