import {expect, Page} from "@playwright/test"
import { CheckoutLocator } from "../locotors/Checkout"
export class CheckoutPage{
    readonly page:Page
    constructor(page:Page){
        this.page = page
    }
    async clickOnCheckoutBtn(){
        await this.page.getByRole('button',{name:'Checkout'}).click()
    }
    async verfiyCheckoutUrl(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
    }
    async verfiyCheckoutUserInfoUrl(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
        await expect(this.page.locator('.title')).toBeVisible()

    }
    async enterFirstName(firstName:string){
        await this.page.locator(CheckoutLocator.firstName).fill(firstName)
    }
    async enterSecondName(lastName:string){
        await this.page.locator(CheckoutLocator.lastName).fill(lastName)
    }
    async enterZipCode(ZipCode:string){
        await this.page.locator(CheckoutLocator.postCode).fill(ZipCode)
    }
    async clickContinueBtn(){
        await this.page.getByRole('button',{name:'Continue'}).click()
    }
    async errorMessage(errorMessage:string){
        await expect(this.page.locator('.error-message-container')).toHaveText(errorMessage)
    }
    async clickOnFinishBtn(){
        await this.page.locator('#finish').click()
    }
    async orderCompleted(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
        await expect(this.page.locator('.title')).toBeVisible()
    }
    async userInfo(firstName:string,lastName:string,ZipCode:string){
        await this.enterFirstName(firstName)
        await this.enterSecondName(lastName)
        await this.enterZipCode(ZipCode)
        await this.clickContinueBtn()
    }
   
}
