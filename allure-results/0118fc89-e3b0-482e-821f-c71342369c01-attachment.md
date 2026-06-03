# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verifyCheckoutPage.spec.ts >> Verify Checkout >> Verify checkout page 2 user information negative flow
- Location: tests/verifyCheckoutPage.spec.ts:24:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.inventory_item').nth(1).getByRole('button')

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
        - generic [ref=e21]:
          - textbox "First Name" [ref=e22]
          - img [ref=e23]
        - generic [ref=e25]:
          - textbox "Last Name" [ref=e26]: Kumar
          - img [ref=e27]
        - generic [ref=e29]:
          - textbox "Zip/Postal Code" [ref=e30]: "535001"
          - img [ref=e31]
        - 'heading "Error: First Name is required" [level=3] [ref=e34]':
          - button [ref=e35] [cursor=pointer]:
            - img [ref=e36]
          - text: "Error: First Name is required"
      - generic [ref=e38]:
        - button "Go back Cancel" [ref=e39] [cursor=pointer]:
          - img "Go back" [ref=e40]
          - text: Cancel
        - button "Continue" [active] [ref=e41] [cursor=pointer]
  - contentinfo [ref=e42]:
    - list [ref=e43]:
      - listitem [ref=e44]:
        - link "Twitter" [ref=e45] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e46]:
        - link "Facebook" [ref=e47] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e48]:
        - link "LinkedIn" [ref=e49] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e50]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
  11  |     ).toHaveText(productName);
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
> 41  |       .click();
      |        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  42  |   }
  43  |   async clickRemoveButton(index: number) {
  44  |     await this.page
  45  |       .locator(".inventory_item")
  46  |       .nth(index)
  47  |       .getByRole("button", { name: "Remove" })
  48  |       .click();
  49  |   }
  50  |   
  51  |   async VerifyCartBadgeNotShow() {
  52  |     await expect(this.page.locator(".shopping_cart_badge")).toBeHidden();
  53  |   }
  54  |   async clickCartIcon() {
  55  |     await this.page.locator(".shopping_cart_link").click();
  56  |   }
  57  |   async clickOnProduct(index: number) {
  58  |     await this.page.locator(".inventory_item_name").nth(index).click();
  59  |   }
  60  |   async verfiyProductDescription(productDescryption: string) {
  61  |     await expect(
  62  |       this.page.locator(".inventory_details_desc"),
  63  |     ).toHaveText(productDescryption);
  64  |   }
  65  |   async verifyAllProductVisible(
  66  |     productName: string,
  67  |     productPrice: string,
  68  |     productButton: string,
  69  |     productImage: string,
  70  |     index: number,
  71  |   ) {
  72  |     await this.verfiyProductName(productName, index);
  73  |     await this.verfiyProductPrice(productPrice, index);
  74  |     await this.verifyProductButton(index);
  75  |     await this.verifyProductImage(productImage, index);
  76  |   }
  77  |   async verifySingleProduct(index: number, cartCount: string) {
  78  |     await this.clickAddToCart(index);
  79  |     await this.verifyCartCount(cartCount);
  80  |   }
  81  |   async verifySingleProductRemove(index: number, cartCount: string) {
  82  |     await this.clickAddToCart(index);
  83  |     await this.verifyCartCount(cartCount);
  84  |     await this.clickRemoveButton(index);
  85  |     await this.VerifyCartBadgeNotShow();
  86  |   }
  87  |   async verifyProductData(
  88  |     index: number,
  89  |     productName: string,
  90  |     productPrice: string,
  91  |     productImage: string,
  92  |     productDescription: string,
  93  |   ) {
  94  |     await this.clickOnProduct(index);
  95  | 
  96  |     await expect(this.page.locator(".inventory_details_name")).toHaveText(
  97  |       productName,
  98  |     );
  99  | 
  100 |     await expect(this.page.locator(".inventory_details_price")).toHaveText(
  101 |       productPrice,
  102 |     );
  103 | 
  104 |     await expect(this.page.locator(".inventory_details_img")).toHaveAttribute(
  105 |       "alt",
  106 |       productImage,
  107 |     );
  108 | 
  109 |     await expect(this.page.locator(".inventory_details_desc")).toHaveText(
  110 |       productDescription,
  111 |     );
  112 | 
  113 |     await expect(
  114 |       this.page.getByRole("button", { name: "Add to cart" }),
  115 |     ).toBeVisible();
  116 |   }
  117 | }
  118 | 
```