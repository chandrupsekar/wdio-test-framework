class LoginPageElements{
    //page locators:
    get username() { return $('#username') }     //locator with id
    get password() { return $('#password') }    //locator with id
    get loginBtn() { return $('#loginBtn') }    //locator with id
    get signUpLink() { return $('=Sign up') }   //locator with linktext

}
module.exports = new LoginPageElements()