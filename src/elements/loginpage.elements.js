// class LoginPageElements{
//     //page locators:
//     get username() { return $('#username') }     //locator with id
//     get password() { return $('#password') }    //locator with id
//     get loginBtn() { return $('#loginBtn') }    //locator with id
//     get signUpLink() { return $('=Sign up') }   //locator with linktext
//     get clickableCheckBoxElement(){ return $('span.private-checkbox__inner') } //locator with class 
//     get trueCheckBoxElement(){ return $('#remember');} //locator with id
// }
// module.exports = new LoginPageElements()

class LoginPageElements{
    //page locators:
    get username() { return $('#username') }     //locator with id
    get password() { return $('#password') }    //locator with id
    get loginBtn() { return $('#loginBtn') }    //locator with id
    get signUpLink() { return $('=Sign up') }   //locator with linktext

    get CheckBoxElement(){ return $('input#remember');} //locator with id

}
module.exports = new LoginPageElements()