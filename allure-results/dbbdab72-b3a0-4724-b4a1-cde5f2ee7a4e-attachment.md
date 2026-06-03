# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verifyCartPage.spec.ts >> Verfiy Cart page >> Continue shopping button
- Location: tests/verifyCartPage.spec.ts:59:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'Continue Shopping' })

```

# Test source

```ts
  1  | import {Page,expect} from "@playwright/test"
  2  | 
  3  | export class CartPage{
  4  |     readonly page:Page
  5  |     constructor(page:Page){
  6  |         this.page = page
  7  |     }
  8  |     async removeAllProduct(){
  9  |         while(await this.page.getByRole('button',{name:'Remove'}).count() > 0){
  10 |             await this.page.getByRole("button",{name:'Remove'}).first().click()
  11 |         } 
  12 |       
  13 |     }
  14 |     async verifyProductRemoved(productName: string) {
  15 |         await expect(this.page.getByText(productName)).toHaveCount(0);
  16 | 
  17 |     }
  18 |     async clickShoppinBtn(){
> 19 |         await this.page.getByRole('button',{name:'Continue Shopping'}).click()
     |                                                                        ^ Error: locator.click: Test ended.
  20 |     }
  21 | 
  22 |    
  23 | }
```