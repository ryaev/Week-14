import LandingPage from "../pageobjects/landingPage.js"
import { productsPage, itemOne } from "../pageobjects/productsPage.js"

describe("Problem user login", ()=>{
    beforeAll("Open browser", ()=>{
        browser.setWindowSize (1440, 1024);
        browser.url("https://www.saucedemo.com/");
    })

    it("Perform user login", async()=>{
        await expect(LandingPage.loginButton).toBeDisplayed();
        await expect(LandingPage.userNameInput).toBeDisplayed();
        await expect(LandingPage.passwordInput).toBeDisplayed();

        await LandingPage.login("problem_user", "secret_sauce");
        await LandingPage.loginButtonClick();
    })

    it("Check redirection to product page", async ()=>{
        await expect(productsPage.titlePage).toBeDisplayed();
        await expect(productsPage.titlePage).toHaveTextContaining("Products");
        await expect(itemOne.itemImg).toBeDisplayed();
        await expect(itemOne.itemImg).toHaveAttribute("src", "/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg");
        await expect(itemOne.itemTitle).toBeDisplayed();
        await expect(productsPage.titlePage).toHaveTextContaining("Sauce Labs Backpack");
    })
})