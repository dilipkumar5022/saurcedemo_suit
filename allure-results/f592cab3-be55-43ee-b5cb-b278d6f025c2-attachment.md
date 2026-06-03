# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verifySortProduct.spec.ts >> To verify product sort >> Sort by Price (High to Low)
- Location: tests/verifySortProduct.spec.ts:20:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 3
+ Received  + 3

  Array [
-   "Test.allTheThings() T-Shirt (Red)",
-   "Sauce Labs Onesie",
    "Sauce Labs Fleece Jacket",
+   "Sauce Labs Backpack",
    "Sauce Labs Bolt T-Shirt",
+   "Test.allTheThings() T-Shirt (Red)",
    "Sauce Labs Bike Light",
-   "Sauce Labs Backpack",
+   "Sauce Labs Onesie",
  ]
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
          - generic [ref=e28]: Price (high to low)
          - combobox [ref=e29]:
            - option "Name (A to Z)"
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)" [selected]
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link "Sauce Labs Fleece Jacket" [ref=e36]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket"
        - generic [ref=e37]:
          - generic [ref=e38]:
            - link "Sauce Labs Fleece Jacket" [ref=e39]:
              - /url: "#"
              - generic [ref=e40]: Sauce Labs Fleece Jacket
            - generic [ref=e41]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e42]:
            - generic [ref=e43]: $49.99
            - button "Add to cart" [ref=e44] [cursor=pointer]
      - generic [ref=e45]:
        - link "Sauce Labs Backpack" [ref=e47]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e48]
        - generic [ref=e49]:
          - generic [ref=e50]:
            - link "Sauce Labs Backpack" [ref=e51]:
              - /url: "#"
              - generic [ref=e52]: Sauce Labs Backpack
            - generic [ref=e53]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e54]:
            - generic [ref=e55]: $29.99
            - button "Add to cart" [ref=e56] [cursor=pointer]
      - generic [ref=e57]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e59]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e60]
        - generic [ref=e61]:
          - generic [ref=e62]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e63]:
              - /url: "#"
              - generic [ref=e64]: Sauce Labs Bolt T-Shirt
            - generic [ref=e65]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e66]:
            - generic [ref=e67]: $15.99
            - button "Add to cart" [ref=e68] [cursor=pointer]
      - generic [ref=e69]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e71]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)"
        - generic [ref=e72]:
          - generic [ref=e73]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e74]:
              - /url: "#"
              - generic [ref=e75]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e76]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e77]:
            - generic [ref=e78]: $15.99
            - button "Add to cart" [ref=e79] [cursor=pointer]
      - generic [ref=e80]:
        - link "Sauce Labs Bike Light" [ref=e82]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e83]
        - generic [ref=e84]:
          - generic [ref=e85]:
            - link "Sauce Labs Bike Light" [ref=e86]:
              - /url: "#"
              - generic [ref=e87]: Sauce Labs Bike Light
            - generic [ref=e88]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e89]:
            - generic [ref=e90]: $9.99
            - button "Add to cart" [ref=e91] [cursor=pointer]
      - generic [ref=e92]:
        - link "Sauce Labs Onesie" [ref=e94]:
          - /url: "#"
          - img "Sauce Labs Onesie"
        - generic [ref=e95]:
          - generic [ref=e96]:
            - link "Sauce Labs Onesie" [ref=e97]:
              - /url: "#"
              - generic [ref=e98]: Sauce Labs Onesie
            - generic [ref=e99]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e100]:
            - generic [ref=e101]: $7.99
            - button "Add to cart" [ref=e102] [cursor=pointer]
  - contentinfo [ref=e103]:
    - list [ref=e104]:
      - listitem [ref=e105]:
        - link "Twitter" [ref=e106]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e107]:
        - link "Facebook" [ref=e108]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e109]:
        - link "LinkedIn" [ref=e110]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e111]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import{Page,expect} from "@playwright/test"
  2  | 
  3  | export class SortProduct{
  4  |     readonly page:Page;
  5  |     constructor(page:Page){
  6  |         this.page= page;
  7  |     }
  8  |     
  9  |     async sortAsceOrder(){
  10 |         const product = await this.page.locator('.inventory_item_name').allTextContents()
  11 |         const sortProduct = [...product].sort();
  12 |         expect (product).toEqual(sortProduct)
  13 |     }
  14 |     async sortDsecOrder(){
  15 |         const product = await this.page.locator('.inventory_item_name').allTextContents()
  16 |         const sortProduct = [...product].sort().reverse()
> 17 |         expect (product).toEqual(sortProduct)
     |                          ^ Error: expect(received).toEqual(expected) // deep equality
  18 |     }
  19 |     async sortPriceAscOrder(){
  20 |         const productPrice = await this.page.locator('.inventory_item_price').allTextContents()
  21 |         const prices = productPrice.map(price=>Number(price.replace('$','')))
  22 |         const sortPrice = [...prices].sort()
  23 |         expect(productPrice).toEqual(prices)
  24 | 
  25 |     }
  26 |     async sortPriceDecOrder(){
  27 |         const productPrice = await this.page.locator('.inventory_item_price').allTextContents()
  28 |         const prices = productPrice.map(price => price.replace('$',''))
  29 |         const sortPrice = [...prices].sort().reverse()
  30 |         expect (productPrice).toEqual(sortPrice)
  31 |     }
  32 |     async clickOnCartDropDown(filterValue:string){
  33 |         await this.page.locator('.product_sort_container').selectOption(filterValue)
  34 |     }
  35 | }
```