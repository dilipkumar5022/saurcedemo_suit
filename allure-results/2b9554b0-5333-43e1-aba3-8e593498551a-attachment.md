# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verifyProductPage.spec.ts >> Verify Product Page >> Verify all products are displayed after login
- Location: tests/verifyProductPage.spec.ts:12:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#user-name')

```

# Test source

```ts
  1  | import {Page,expect} from "@playwright/test"
  2  | import { loginLocotors } from "../locotors/LoginPage";
  3  | export class LoginPage{
  4  |     readonly page:Page;
  5  | 
  6  |     constructor(page:Page){
  7  |         this.page = page;
  8  |     }
  9  |     async naviagtionUrl(url:string){
  10 |         await this.page.goto(url)
  11 |     }
  12 |     async enterUsername (username:string){
> 13 |         await this.page.locator(loginLocotors.username).fill(username)
     |                                                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  14 |     }
  15 |     async enterPassword (password:string){
  16 |         await this.page.locator(loginLocotors.password).fill(password)
  17 |     }
  18 |     async clickLogin (){
  19 |         await this.page.getByRole('button',{name:loginLocotors.loginBtn}).click()
  20 |     }
  21 |     async verifyLogin(loginUrl:string){
  22 |         await expect(this.page).toHaveURL(loginUrl)
  23 |     }
  24 |     async errorMessage(errorMessage:string){
  25 |         await expect(this.page.getByText(errorMessage)).toBeVisible()
  26 |     }
  27 |     async login(username:string,password:string,loginUrl:string){
  28 |         await this.enterUsername(username);
  29 |         await this.enterPassword(password);
  30 |         await this.clickLogin();
  31 |         await this.verifyLogin(loginUrl);
  32 | 
  33 |     }
  34 | 
  35 |     async loginDataDriven(url:string,username:string,password:string){
  36 |         await this.naviagtionUrl(url)
  37 |         await this.enterUsername(username)
  38 |         await this.enterPassword(password)
  39 |         await this.clickLogin()
  40 |     }
  41 | }
```