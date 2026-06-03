# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verifyCheckoutPage.spec.ts >> Verify Checkout >> Verify checkout page 2 user information negative flow
- Location: tests/verifyCheckoutPage.spec.ts:24:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.error-message-container error')
Expected: "Error: First Name is required"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.error-message-container error')

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: "Swag Labs 1 Checkout: Your Information"
- textbox "First Name"
- textbox "Last Name": Kumar
- textbox "Zip/Postal Code": "535001"
- 'heading "Error: First Name is required" [level=3]':
  - button
  - text: "Error: First Name is required"
- button "Go back Cancel":
  - img "Go back"
  - text: Cancel
- button "Continue"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import {expect, Page} from "@playwright/test"
  2  | import { CheckoutLocator } from "../locotors/Checkout"
  3  | export class CheckoutPage{
  4  |     readonly page:Page
  5  |     constructor(page:Page){
  6  |         this.page = page
  7  |     }
  8  |     async clickOnCheckoutBtn(){
  9  |         await this.page.getByRole('button',{name:'Checkout'}).click()
  10 |     }
  11 |     async verfiyCheckoutUrl(){
  12 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
  13 |     }
  14 |     async verfiyCheckoutUserInfoUrl(){
  15 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
  16 |         await expect(this.page.locator('.title')).toBeVisible()
  17 | 
  18 |     }
  19 |     async enterFirstName(firstName:string){
  20 |         await this.page.locator(CheckoutLocator.firstName).fill(firstName)
  21 |     }
  22 |     async enterSecondName(lastName:string){
  23 |         await this.page.locator(CheckoutLocator.lastName).fill(lastName)
  24 |     }
  25 |     async enterZipCode(ZipCode:string){
  26 |         await this.page.locator(CheckoutLocator.postCode).fill(ZipCode)
  27 |     }
  28 |     async clickContinueBtn(){
  29 |         await this.page.getByRole('button',{name:'Continue'}).click()
  30 |     }
  31 |     async errorMessage(errorMessage:string){
> 32 |         await expect(this.page.locator('.error-message-container error')).toHaveText(errorMessage)
     |                                                                           ^ Error: expect(locator).toHaveText(expected) failed
  33 |     }
  34 |     async clickOnFinishBtn(){
  35 |         await this.page.getByRole('button',{name:'Finish'}).click()
  36 |     }
  37 |     async orderCompleted(){
  38 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
  39 |         await expect(this.page.locator('.title')).toBeVisible()
  40 |     }
  41 |     async userInfo(firstName:string,lastName:string,ZipCode:string){
  42 |         await this.enterFirstName(firstName)
  43 |         await this.enterSecondName(lastName)
  44 |         await this.enterZipCode(ZipCode)
  45 |         await this.clickContinueBtn()
  46 |     }
  47 |     
  48 | }
  49 | 
```