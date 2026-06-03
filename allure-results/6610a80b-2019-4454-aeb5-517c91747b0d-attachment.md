# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verifyProductPage.spec.ts >> Verify Product Page >> Add multiple products to cart
- Location: tests/verifyProductPage.spec.ts:20:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.shopping_cart_badge')
Expected: "0"
Received: "1"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.shopping_cart_badge')
    14 × locator resolved to <span class="shopping_cart_badge" data-test="shopping-cart-badge">1</span>
       - unexpected value "1"

```

```yaml
- text: "1"
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
  12 |         await expect(this.page.locator('.inventory_item_price').nth(index)).toHaveText(productPrice)
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
> 23 |         await expect(this.page.locator('.shopping_cart_badge')).toHaveText(cartCount)
     |                                                                 ^ Error: expect(locator).toHaveText(expected) failed
  24 |     }
  25 |     async VerfiyCartNavigation(CartUrl:string){
  26 |         await expect(this.page).toHaveURL(CartUrl)
  27 |     }
  28 |     async clickAddToCart(index:number){
  29 |         const addToCart = this.page.locator('button[data-test^="add-to-cart"]').nth(index)
  30 |         await addToCart.click()
  31 |     }
  32 |     async verifyAllProductVisible(productName:string,productPrice:string,productButton:string,productImage:string,index:number){
  33 |         await this.verfiyProductName(productName,index)
  34 |         await this.verfiyProductPrice(productPrice,index)
  35 |         await this.verifyProductButton(index)
  36 |         await this.verifyProductImage(productImage,index)
  37 |     }
  38 |     async verifySingleProduct(index:number,cartCount:string){
  39 |         await this.clickAddToCart(index)
  40 |         await this.verifyCartCount(cartCount)
  41 |     }
  42 | }
  43 | 
```