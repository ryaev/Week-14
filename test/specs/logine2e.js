import LandingPage from "../pageobjects/landingPage"
import LandingPage from "../pageobjects/landingPage.js"

import UserPage from "../pageobjects/userPage.js"

describe("Login from user", ()=>{
    beforeAll("Open browser", ()=>{
        browser.setWindowSize (1440, 1024);
        browser.url("https://www.saucedemo.com/");
    })

    it("Verify login", async()=>{
        await expect(LandingPage.loginButton).toBeDisplayed();
        await LandingPage.loginButtonClick();

        await expect(LandingPage.userNameInput).toBeDisplayed();
        await expect(LandingPage.passwordInput).toBeDisplayed();

        await LandingPage.login("standard_user", "secret_sauce");
        await LandingPage.loginButtonClick();
    })

    it("Verify user wellcome page", async ()=>{
        await expect(UserPage.wellcomeText).toBeDisplayed();
        await expect(UserPage.wellcomeText).toHaveTextContaining("Products");
    })
})
