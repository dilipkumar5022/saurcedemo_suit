# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verifyCheckoutPage.spec.ts >> Verify Checkout >> Verify order details in checkout page
- Location: tests/verifyCheckoutPage.spec.ts:38:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('postal-code')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - generic [ref=e14]: "1"
      - generic [ref=e16]: "Checkout: Your Information"
    - generic [ref=e19]:
      - generic [ref=e20]:
        - textbox "First Name" [ref=e22]: John
        - textbox "Last Name" [active] [ref=e24]: Smith
        - textbox "Zip/Postal Code" [ref=e26]
      - generic [ref=e28]:
        - button "Go back Cancel" [ref=e29] [cursor=pointer]:
          - img "Go back" [ref=e30]
          - text: Cancel
        - button "Continue" [ref=e31] [cursor=pointer]
  - contentinfo [ref=e32]:
    - list [ref=e33]:
      - listitem [ref=e34]:
        - link "Twitter" [ref=e35] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e36]:
        - link "Facebook" [ref=e37] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e38]:
        - link "LinkedIn" [ref=e39] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e40]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
> 26 |         await this.page.locator(CheckoutLocator.postCode).fill(ZipCode)
     |                                                           ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  27 |     }
  28 |     async clickContinueBtn(){
  29 |         await this.page.getByRole('button',{name:'Continue'}).click()
  30 |     }
  31 |     async errorMessage(errorMessage:string){
  32 |         await expect(this.page.locator('.error-message-container error')).toHaveText(errorMessage)
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