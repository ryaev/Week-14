import LandingPage from "../pageobjects/landingPage.js"
import { productsPage, itemOne } from "../pageobjects/productsPage.js"

describe("Performance glitch user login", ()=>{

    beforeAll("Open browser", ()=>{
        browser.setWindowSize (1440, 1024);
        browser.url("https://www.saucedemo.com/");
    })

    it("Perform user login", async()=>{
        await expect(LandingPage.loginButton).toBeDisplayed();
        await expect(LandingPage.userNameInput).toBeDisplayed();
        await expect(LandingPage.passwordInput).toBeDisplayed();

        await LandingPage.login("performance_glitch_user", "secret_sauce");
        await LandingPage.loginButtonClick();

        const dateLogin = new Date().getTime();
        await expect(productsPage.titlePage).toBeDisplayed();
        await expect(productsPage.titlePage).toHaveTextContaining("Products");
        const dateResponse = new Date().getTime();
        const timeResponse = dateResponse - dateLogin;
        const optimalTime = 200;

        expect(timeResponse).toBeLessThan(optimalTime);
    })
})
