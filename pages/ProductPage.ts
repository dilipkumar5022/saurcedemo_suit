import { Page, expect } from "@playwright/test";

export class ProductPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async verfiyProductName(productName: string, index: number) {
    await expect(
      this.page.locator(".inventory_item_name").nth(index),
    ).toHaveText(productName);
  }
  async verfiyProductPrice(productPrice: string, index: number) {
    await expect(
      this.page.locator(".inventory_item_price").nth(index),
    ).toHaveText(productPrice);
  }
  async verifyProductImage(productImage: string, index: number) {
    const image = this.page.locator(".inventory_item_img img").nth(index);
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute("alt", productImage);
  }
  async verifyProductButton(index: number) {
    await expect(
      this.page.locator('button[data-test^="add-to-cart"]').nth(index),
    ).toBeVisible();
  }
  async verifyCartCount(cartCount: string) {
    await expect(this.page.locator(".shopping_cart_badge")).toHaveText(
      cartCount,
    );
  }
  async VerfiyCartNavigation(CartUrl: string) {
    await expect(this.page).toHaveURL(CartUrl);
  }
  async clickAddToCart(index: number) {
    await this.page
      .locator(".inventory_item")
      .nth(index)
      .getByRole("button")
      .click();
  }
  async clickRemoveButton(index: number) {
    await this.page
      .locator(".inventory_item")
      .nth(index)
      .getByRole("button", { name: "Remove" })
      .click();
  }
  
  async VerifyCartBadgeNotShow() {
    await expect(this.page.locator(".shopping_cart_badge")).toBeHidden();
  }
  async clickCartIcon() {
    await this.page.locator(".shopping_cart_link").click();
  }
  async clickOnProduct(index: number) {
    await this.page.locator(".inventory_item_name").nth(index).click();
  }
  async verfiyProductDescription(productDescryption: string) {
    await expect(
      this.page.locator(".inventory_details_desc"),
    ).toHaveText(productDescryption);
  }
  async verifyAllProductVisible(
    productName: string,
    productPrice: string,
    productButton: string,
    productImage: string,
    index: number,
  ) {
    await this.verfiyProductName(productName, index);
    await this.verfiyProductPrice(productPrice, index);
    await this.verifyProductButton(index);
    await this.verifyProductImage(productImage, index);
  }
  async verifySingleProduct(index: number, cartCount: string) {
    await this.clickAddToCart(index);
    await this.verifyCartCount(cartCount);
  }
  async verifySingleProductRemove(index: number, cartCount: string) {
    await this.clickAddToCart(index);
    await this.verifyCartCount(cartCount);
    await this.clickRemoveButton(index);
    await this.VerifyCartBadgeNotShow();
  }
  async verifyProductData(
    index: number,
    productName: string,
    productPrice: string,
    productImage: string,
    productDescription: string,
  ) {
    await this.clickOnProduct(index);

    await expect(this.page.locator(".inventory_details_name")).toHaveText(
      productName,
    );

    await expect(this.page.locator(".inventory_details_price")).toHaveText(
      productPrice,
    );

    await expect(this.page.locator(".inventory_details_img")).toHaveAttribute(
      "alt",
      productImage,
    );

    await expect(this.page.locator(".inventory_details_desc")).toHaveText(
      productDescription,
    );

    await expect(
      this.page.getByRole("button", { name: "Add to cart" }),
    ).toBeVisible();
  }
    
}
