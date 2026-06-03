import {test} from "../fixture/customerFixture"

import { excelReader } from "../utils/excelReader"
const testData:any = excelReader('/Users/dilipkumarketha/Desktop/playwright/project5/resource/Product_Validation.xlsx','ProductValidation')

test.describe("Verify Product Page",()=>{
    test.beforeEach("login",async({loginPage})=>{
         await loginPage.naviagtionUrl('https://www.saucedemo.com/')
         await loginPage.login('standard_user','secret_sauce','https://www.saucedemo.com/inventory.html')

    })
    test("Verify all products are displayed after login", async ({productPage})=>{
        for(let i=0;i<testData.length;i++){
            await productPage.verifyAllProductVisible(testData[i].productName,testData[i].price,testData[i].addToCartButton,testData[i].imageAlt,i)
        }
    })
    test("Add single product to cart",async({productPage})=>{
        await productPage.verifySingleProduct(1,'1')
    })
    test("Add multiple products to cart",async({productPage})=>{
        for(let i=0;i<6;i++){
            const num = i+1
            const cartCount = num.toString()
            await productPage.verifySingleProduct(i,cartCount)
        }
       
    })
    test("Remove product from cart",async({productPage})=>{
        await productPage.verifySingleProductRemove(1,'1')
    })
    test("Verify cart icon navigation", async({productPage})=>{
        await productPage.clickCartIcon()
        await productPage.VerfiyCartNavigation('https://www.saucedemo.com/cart.html')
    })
    test("Verify product details page", async({productPage})=>{
        await productPage.verifyProductData(
            1,
            'Sauce Labs Bike Light',
            '$9.99',
            'Sauce Labs Bike Light',
            "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
        )
    })

    
})