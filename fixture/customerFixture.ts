import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { SortProduct } from "../pages/SortProduct";
import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
type customerFixture={
     loginPage:LoginPage
     productPage:ProductPage
     sortProduct:SortProduct
     cartPage:CartPage
     checkout:CheckoutPage
    
};

export const test = base.extend<customerFixture>({
    loginPage: async({page},use)=>{
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },
    productPage:async({page},use)=>{
        const productPage = new ProductPage(page)
        await use(productPage)
    },
    sortProduct:async({page},use)=>{
        const sortProduct = new SortProduct(page)
        await use(sortProduct)
    },
    cartPage:async ({page},use)=>{
        const cartPage = new CartPage(page)
        await use(cartPage)
    },
    checkout:async({page},use)=>{
        const checkout = new CheckoutPage(page)
        await use(checkout)
    }
})