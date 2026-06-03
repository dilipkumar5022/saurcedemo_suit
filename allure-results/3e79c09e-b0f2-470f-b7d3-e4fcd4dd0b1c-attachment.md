# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verifyProductPage.spec.ts >> Verify Product Page >> Verify all products are displayed after login
- Location: tests/verifyProductPage.spec.ts:12:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Sauce Labs Bolt T-Shirt')
Expected: visible
Error: strict mode violation: getByText('Sauce Labs Bolt T-Shirt') resolved to 2 elements:
    1) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Bolt T-Shirt</div> aka locator('[data-test="item-1-title-link"]')
    2) <div class="inventory_item_desc" data-test="inventory-item-desc">Get your testing superhero on with the Sauce Labs…</div> aka getByText('Get your testing superhero on')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Sauce Labs Bolt T-Shirt')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - link [ref=e13] [cursor=pointer]:
                  - /url: "#"
                  - text: All Items
                - link [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - link [ref=e15] [cursor=pointer]:
                  - /url: "#"
                  - text: Logout
                - link [ref=e16] [cursor=pointer]:
                  - /url: "#"
                  - text: Reset App State
              - generic [ref=e17]:
                - button [ref=e18] [cursor=pointer]: Close Menu
                - img [ref=e19]
        - generic [ref=e21]: Swag Labs
      - generic [ref=e24]:
        - generic [ref=e25]: Products
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Name (A to Z)
          - combobox [ref=e29]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link "Sauce Labs Backpack" [ref=e36] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack"
        - generic [ref=e37]:
          - generic [ref=e38]:
            - link "Sauce Labs Backpack" [ref=e39] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e40]: Sauce Labs Backpack
            - generic [ref=e41]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e42]:
            - generic [ref=e43]: $29.99
            - button "Add to cart" [ref=e44] [cursor=pointer]
      - generic [ref=e45]:
        - link "Sauce Labs Bike Light" [ref=e47] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light"
        - generic [ref=e48]:
          - generic [ref=e49]:
            - link "Sauce Labs Bike Light" [ref=e50] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e51]: Sauce Labs Bike Light
            - generic [ref=e52]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e53]:
            - generic [ref=e54]: $9.99
            - button "Add to cart" [ref=e55] [cursor=pointer]
      - generic [ref=e56]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e58] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt"
        - generic [ref=e59]:
          - generic [ref=e60]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e61] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e62]: Sauce Labs Bolt T-Shirt
            - generic [ref=e63]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e64]:
            - generic [ref=e65]: $15.99
            - button "Add to cart" [ref=e66] [cursor=pointer]
      - generic [ref=e67]:
        - link "Sauce Labs Fleece Jacket" [ref=e69] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket"
        - generic [ref=e70]:
          - generic [ref=e71]:
            - link "Sauce Labs Fleece Jacket" [ref=e72] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e73]: Sauce Labs Fleece Jacket
            - generic [ref=e74]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e75]:
            - generic [ref=e76]: $49.99
            - button "Add to cart" [ref=e77] [cursor=pointer]
      - generic [ref=e78]:
        - link "Sauce Labs Onesie" [ref=e80] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e81]
        - generic [ref=e82]:
          - generic [ref=e83]:
            - link "Sauce Labs Onesie" [ref=e84] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e85]: Sauce Labs Onesie
            - generic [ref=e86]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e87]:
            - generic [ref=e88]: $7.99
            - button "Add to cart" [ref=e89] [cursor=pointer]
      - generic [ref=e90]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e92] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)"
        - generic [ref=e93]:
          - generic [ref=e94]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e95] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e96]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e97]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e98]:
            - generic [ref=e99]: $15.99
            - button "Add to cart" [ref=e100] [cursor=pointer]
  - contentinfo [ref=e101]:
    - list [ref=e102]:
      - listitem [ref=e103]:
        - link "Twitter" [ref=e104] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e105]:
        - link "Facebook" [ref=e106] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e107]:
        - link "LinkedIn" [ref=e108] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e109]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
  8  |     async verfiyProductName(productName:string) {
> 9  |         await expect(this.page.getByText(productName)).toBeVisible()
     |                                                        ^ Error: expect(locator).toBeVisible() failed
  10 |     }
  11 |     async verfiyProductPrice(productPrice:string){
  12 |         await expect(this.page.getByText(productPrice)).toBeVisible()
  13 |     }
  14 |     async verifyProductImage(productImage:string){
  15 |         await expect (this.page.locator(productImage)).toBeVisible()
  16 |     }
  17 |     async verifyProductButton(productButton:string){
  18 |         await expect(this.page.getByText(productButton)).toBeVisible()
  19 |     }
  20 |     async verifyCartCount(cartCount:string){
  21 |         await expect(this.page.locator('')).toHaveText(cartCount)
  22 |     }
  23 |     async VerfiyCartNavigation(CartUrl:string){
  24 |         await expect(this.page).toHaveURL(CartUrl)
  25 |     }
  26 | 
  27 |     async verifyAllProductVisible(productName:string,productPrice:string,productButton:string,productImage:string){
  28 |         await this.verfiyProductName(productName)
  29 |         await this.verfiyProductPrice(productPrice)
  30 |         await this.verifyProductButton(productButton)
  31 |         await this.verifyProductImage(productImage)
  32 |     }
  33 | }
  34 | 
```