class ContactspageElement{
    get newContactLink(){  return $("[data-selenium-test= 'new-object-button']")}
    get userName(){return $('[data-selenium-test="property-input-email"]')}
    get firstName(){return $('[data-selenium-test="property-input-firstname"]')}
    get lastName(){return $('[data-selenium-test="property-input-lastname"]')}
    get createContactButton(){ return $("[data-selenium-test='base-dialog-confirm-btn']")    }

}
module.exports = new ContactspageElement()