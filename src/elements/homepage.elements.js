class HomePageElements{
    //page locators:
    get contactLink(){return $('#nav-primary-contacts-branch')}
    get secondaryContact(){ return $('#nav-secondary-contacts')}
}
module.exports = new HomePageElements()