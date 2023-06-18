import LandingPage from "../pageobjects/landingPage.js"
import { productsPage, itemOne } from "../pageobjects/productsPage.js"

describe("Login from user", ()=>{
    beforeAll("Open browser", ()=>{
        browser.setWindowSize (1440, 1024);
        browser.url("https://www.saucedemo.com/");
    })

    it("Verify login", async()=>{
        await expect(LandingPage.loginButton).toBeDisplayed();
        //await LandingPage.loginButtonClick();

        await expect(LandingPage.userNameInput).toBeDisplayed();
        await expect(LandingPage.passwordInput).toBeDisplayed();

        await LandingPage.login("standard_user", "secret_sauce");
        await LandingPage.loginButtonClick();
    })

    it("Check redirection to product page", async ()=>{
        await expect(productsPage.titlePage).toBeDisplayed();
        await expect(productsPage.titlePage).toHaveTextContaining("Products");
        await expect(itemOne.itemImg).toBeDisplayed();
        await expect(itemOne.itemTitle).toBeDisplayed();
    })
})
