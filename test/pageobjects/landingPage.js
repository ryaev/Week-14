class LandingPage{

    get userNameInput(){
        return $("#user-name");
    }

    get passwordInput(){
        return $("#password");
    }

    get loginButton(){
        return $("#login-button");
    }

    async loginButtonClick(){
        await this.loginButton.click();
    }

    async login(username, password){
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }
}

export default new LandingPage();