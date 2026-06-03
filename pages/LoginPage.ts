import {Page,expect} from "@playwright/test"
import { loginLocotors } from "../locotors/LoginPage";
export class LoginPage{
    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }
    async naviagtionUrl(url:string){
        await this.page.goto(url)
    }
    async enterUsername (username:string){
        await this.page.locator(loginLocotors.username).fill(username)
    }
    async enterPassword (password:string){
        await this.page.locator(loginLocotors.password).fill(password)
    }
    async clickLogin (){
        await this.page.getByRole('button',{name:loginLocotors.loginBtn}).click()
    }
    async verifyLogin(loginUrl:string){
        await expect(this.page).toHaveURL(loginUrl)
    }
    async errorMessage(errorMessage:string){
        await expect(this.page.getByText(errorMessage)).toBeVisible()
    }
    async login(username:string,password:string,loginUrl:string){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
        await this.verifyLogin(loginUrl);

    }

    async loginDataDriven(url:string,username:string,password:string){
        await this.naviagtionUrl(url)
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickLogin()
    }
}