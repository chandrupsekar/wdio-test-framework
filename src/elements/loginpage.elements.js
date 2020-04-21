class LoginPageElements{
    //page locators:
    get username() { return $('#username') }     //locator with id
    get password() { return $('#password') }    //locator with id
    get loginBtn() { return $('#loginBtn') }    //locator with id
    get signUpLink() { return $('=Sign up') }   //locator with linktext
<<<<<<< HEAD
    get clickableCheckBoxElement(){ return $('span.private-checkbox__inner') } //locator with class
    get trueCheckBoxElement(){ return $('#remember');} //locator with id
||||||| merged common ancestors

=======
    get clickableCheckBoxElement(){ return $('span.private-checkbox__inner') } //locator with class 
    get trueCheckBoxElement(){ return $('#remember');} //locator with id
>>>>>>> 3b6c3be88d293f03c113a7f07b48d6e4ab3ce9a2
}
module.exports = new LoginPageElements()