# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verifyProductPage.spec.ts >> Verify Product Page >> Verify product details page
- Location: tests/verifyProductPage.spec.ts:36:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.inventory_item_price').first()
Expected: "$9.99"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.inventory_item_price').first()

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs
- button "Go back Back to products":
  - img "Go back"
  - text: Back to products
- img "Sauce Labs Bike Light"
- text: Sauce Labs Bike Light A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
- button "Add to cart"
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
  1  | import{Page,expect} from "@playwright/test"
  2  | 
  3  | export class ProductPage{
  4  |     readonly page:Page
  5  |     constructor(page:Page){
  6  |         this.page = page
  7  |     }
  8  |     async verfiyProductName(productName:string,index:number) {
  9  |         await expect(this.page.locator('.inventory_item_name').nth(index)).toHaveText(productName)
  10 |     }
  11 |     async verfiyProductPrice(productPrice:string,index:number){
> 12 |         await expect(this.page.locator('.inventory_item_price').nth(index)).toHaveText(productPrice)
     |                                                                             ^ Error: expect(locator).toHaveText(expected) failed
  13 |     }
  14 |     async verifyProductImage(productImage:string,index:number){
  15 |         const image = this.page.locator('.inventory_item_img img').nth(index)
  16 |         await expect(image).toBeVisible()
  17 |         await expect(image).toHaveAttribute('alt',productImage)
  18 |     }
  19 |     async verifyProductButton(index:number){
  20 |         await expect(this.page.locator('button[data-test^="add-to-cart"]').nth(index)).toBeVisible()
  21 |     }
  22 |     async verifyCartCount(cartCount:string){
  23 |         await expect(this.page.locator('.shopping_cart_badge')).toHaveText(cartCount)
  24 |     }
  25 |     async VerfiyCartNavigation(CartUrl:string){
  26 |         await expect(this.page).toHaveURL(CartUrl)
  27 |     }
  28 |     async clickAddToCart(index:number){
  29 |         await this.page.locator('.inventory_item').nth(index).getByRole('button').click();
  30 |     }
  31 |     async clickRemoveButton(index:number){
  32 |         await this.page.locator('.inventory_item').nth(index).getByRole('button',{name:'Remove'}).click();
  33 |     }
  34 |     async VerifyCartBadgeNotShow(){
  35 |         await expect(this.page.locator('.shopping_cart_badge')).toBeHidden()
  36 |     }
  37 |     async clickCartIcon(){
  38 |         await this.page.locator('.shopping_cart_link').click()
  39 |     }
  40 |     async clickOnProduct(index:number){
  41 |         await this.page.locator('.inventory_item_name').nth(index).click()
  42 |     }
  43 |     async verfiyProductDescription(productDescryption:string){
  44 |         await expect(this.page.locator('.inventory_details_desc large_size')).toHaveText(productDescryption)
  45 |     }
  46 |     async verifyAllProductVisible(productName:string,productPrice:string,productButton:string,productImage:string,index:number){
  47 |         await this.verfiyProductName(productName,index)
  48 |         await this.verfiyProductPrice(productPrice,index)
  49 |         await this.verifyProductButton(index)
  50 |         await this.verifyProductImage(productImage,index)
  51 |     }
  52 |     async verifySingleProduct(index:number,cartCount:string){
  53 |         await this.clickAddToCart(index)
  54 |         await this.verifyCartCount(cartCount)
  55 |     }
  56 |     async verifySingleProductRemove(index:number,cartCount:string){
  57 |         await this.clickAddToCart(index)
  58 |         await this.verifyCartCount(cartCount)
  59 |         await this.clickRemoveButton(index)
  60 |         await this.VerifyCartBadgeNotShow()
  61 |     }
  62 |     async verifyProductData(index:number,productName:string,productPrice:string,productImage:string,productDescription:string){
  63 |         await this.clickOnProduct(index)
  64 |       //  await this.verfiyProductName(productName,index)
  65 |         await expect(this.page.locator('.inventory_details_name')).toHaveText(productName)
  66 | 
  67 |         await this.verfiyProductPrice(productPrice,index-1)
  68 |         await this.verifyProductImage(productImage,index-1)
  69 |         await this.verifyProductButton(index-1)
  70 |         await this.verfiyProductDescription(productDescription)
  71 |     }
  72 | }
  73 | 
```