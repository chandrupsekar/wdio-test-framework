class LoginPageElements{
    get username(){return $('#username')}
    get password(){return $('#password')}
    get loginBtn(){return $('#loginBtn')}
    get signUpLink(){return $('=Sign up')}
}
module.exports = new LoginPageElements()