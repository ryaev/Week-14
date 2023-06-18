import LandingPage from "../pageobjects/landingPage.js"
import { productsPage, itemOne } from "../pageobjects/productsPage.js"

describe("Login from user", ()=>{
    beforeAll("Open browser", ()=>{
        browser.setWindowSize (1440, 1024);
        browser.url("https://www.saucedemo.com/");
    })
})
