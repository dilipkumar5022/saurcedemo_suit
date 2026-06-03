# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verifyCartPage.spec.ts >> Verfiy Cart page >> Add product to cart
- Location: tests/verifyCartPage.spec.ts:9:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.inventory_item_name').nth(1)
Expected: "Sauce Labs Bike Light"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.inventory_item_name').nth(1)

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs 1 Your Cart QTY Description 1
- link "Sauce Labs Bike Light":
  - /url: "#"
- text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
- button "Remove"
- button "Go back Continue Shopping":
  - img "Go back"
  - text: Continue Shopping
- button "Checkout"
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
  1   | import { Page, expect } from "@playwright/test";
  2   | 
  3   | export class ProductPage {
  4   |   readonly page: Page;
  5   |   constructor(page: Page) {
  6   |     this.page = page;
  7   |   }
  8   |   async verfiyProductName(productName: string, index: number) {
  9   |     await expect(
  10  |       this.page.locator(".inventory_item_name").nth(index),
> 11  |     ).toHaveText(productName);
      |       ^ Error: expect(locator).toHaveText(expected) failed
  12  |   }
  13  |   async verfiyProductPrice(productPrice: string, index: number) {
  14  |     await expect(
  15  |       this.page.locator(".inventory_item_price").nth(index),
  16  |     ).toHaveText(productPrice);
  17  |   }
  18  |   async verifyProductImage(productImage: string, index: number) {
  19  |     const image = this.page.locator(".inventory_item_img img").nth(index);
  20  |     await expect(image).toBeVisible();
  21  |     await expect(image).toHaveAttribute("alt", productImage);
  22  |   }
  23  |   async verifyProductButton(index: number) {
  24  |     await expect(
  25  |       this.page.locator('button[data-test^="add-to-cart"]').nth(index),
  26  |     ).toBeVisible();
  27  |   }
  28  |   async verifyCartCount(cartCount: string) {
  29  |     await expect(this.page.locator(".shopping_cart_badge")).toHaveText(
  30  |       cartCount,
  31  |     );
  32  |   }
  33  |   async VerfiyCartNavigation(CartUrl: string) {
  34  |     await expect(this.page).toHaveURL(CartUrl);
  35  |   }
  36  |   async clickAddToCart(index: number) {
  37  |     await this.page
  38  |       .locator(".inventory_item")
  39  |       .nth(index)
  40  |       .getByRole("button")
  41  |       .click();
  42  |   }
  43  |   async clickRemoveButton(index: number) {
  44  |     await this.page
  45  |       .locator(".inventory_item")
  46  |       .nth(index)
  47  |       .getByRole("button", { name: "Remove" })
  48  |       .click();
  49  |   }
  50  |   async VerifyCartBadgeNotShow() {
  51  |     await expect(this.page.locator(".shopping_cart_badge")).toBeHidden();
  52  |   }
  53  |   async clickCartIcon() {
  54  |     await this.page.locator(".shopping_cart_link").click();
  55  |   }
  56  |   async clickOnProduct(index: number) {
  57  |     await this.page.locator(".inventory_item_name").nth(index).click();
  58  |   }
  59  |   async verfiyProductDescription(productDescryption: string) {
  60  |     await expect(
  61  |       this.page.locator(".inventory_details_desc"),
  62  |     ).toHaveText(productDescryption);
  63  |   }
  64  |   async verifyAllProductVisible(
  65  |     productName: string,
  66  |     productPrice: string,
  67  |     productButton: string,
  68  |     productImage: string,
  69  |     index: number,
  70  |   ) {
  71  |     await this.verfiyProductName(productName, index);
  72  |     await this.verfiyProductPrice(productPrice, index);
  73  |     await this.verifyProductButton(index);
  74  |     await this.verifyProductImage(productImage, index);
  75  |   }
  76  |   async verifySingleProduct(index: number, cartCount: string) {
  77  |     await this.clickAddToCart(index);
  78  |     await this.verifyCartCount(cartCount);
  79  |   }
  80  |   async verifySingleProductRemove(index: number, cartCount: string) {
  81  |     await this.clickAddToCart(index);
  82  |     await this.verifyCartCount(cartCount);
  83  |     await this.clickRemoveButton(index);
  84  |     await this.VerifyCartBadgeNotShow();
  85  |   }
  86  |   async verifyProductData(
  87  |     index: number,
  88  |     productName: string,
  89  |     productPrice: string,
  90  |     productImage: string,
  91  |     productDescription: string,
  92  |   ) {
  93  |     await this.clickOnProduct(index);
  94  | 
  95  |     await expect(this.page.locator(".inventory_details_name")).toHaveText(
  96  |       productName,
  97  |     );
  98  | 
  99  |     await expect(this.page.locator(".inventory_details_price")).toHaveText(
  100 |       productPrice,
  101 |     );
  102 | 
  103 |     await expect(this.page.locator(".inventory_details_img")).toHaveAttribute(
  104 |       "alt",
  105 |       productImage,
  106 |     );
  107 | 
  108 |     await expect(this.page.locator(".inventory_details_desc")).toHaveText(
  109 |       productDescription,
  110 |     );
  111 | 
```