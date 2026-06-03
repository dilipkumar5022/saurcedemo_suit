import {test} from "../fixture/customerFixture"
import { CheckoutLocator } from "../locotors/Checkout"
import { excelReader } from "../utils/excelReader"
const testData:any = excelReader('/Users/dilipkumarketha/Desktop/playwright/project5/resource/Product_Validation.xlsx','ProductValidation')
const positiveData:any = excelReader('/Users/dilipkumarketha/Desktop/playwright/project5/resource/SauceDemo_Checkout_TestData.xlsx','PositiveData')
const negativeData:any = excelReader('/Users/dilipkumarketha/Desktop/playwright/project5/resource/SauceDemo_Checkout_TestData.xlsx','NegativeData')

test.describe('Verify Checkout',()=>{
    test.beforeEach('login', async({loginPage,productPage})=>{
        await loginPage.naviagtionUrl('https://www.saucedemo.com/')
        await loginPage.login('standard_user','secret_sauce','https://www.saucedemo.com/inventory.html')

    })
    test('Checkout with valid details',async({productPage,checkout})=>{
       console.log(testData[1].productName)
        await productPage.clickAddToCart(1)
        await productPage.clickCartIcon()
        await productPage.VerfiyCartNavigation('https://www.saucedemo.com/cart.html')
        await productPage.verfiyProductName(testData[1].productName,0)
        await checkout.clickOnCheckoutBtn()
        await checkout.verfiyCheckoutUserInfoUrl()
    })

    test('Verify checkout page 2 user information negative flow',async({checkout,productPage})=>{
        await productPage.clickAddToCart(1)
        await productPage.clickCartIcon()
        await productPage.VerfiyCartNavigation('https://www.saucedemo.com/cart.html')
        await productPage.verfiyProductName(testData[1].productName,0)
        await checkout.clickOnCheckoutBtn()
        await checkout.verfiyCheckoutUserInfoUrl()
        for(let i =0;i<negativeData.length;i++){
        await checkout.userInfo(negativeData[i].FirstName,negativeData[i].LastName,negativeData[i].ZipCode)
        await checkout.errorMessage(negativeData[i].ErrorMessage)
        }
    })
    test('Verify checkout with valid data',async({checkout,productPage})=>{
            
           
           // await checkout.page.goto('https://www.saucedemo.com/inventory.html')
            await productPage.clickAddToCart(1)
            await productPage.clickCartIcon()
            await productPage.VerfiyCartNavigation('https://www.saucedemo.com/cart.html')
            await productPage.verfiyProductName(testData[1].productName,0)
            await checkout.clickOnCheckoutBtn()
            await checkout.verfiyCheckoutUserInfoUrl()
            await checkout.userInfo(positiveData[1].FirstName,positiveData[1].LastName,positiveData[1].ZipCode)            
            await checkout.verfiyCheckoutUrl() 
            
            


    })
    test('Verify order details in checkout page',async({checkout,productPage})=>{
        await productPage.clickAddToCart(1)
        await productPage.clickCartIcon()
        await productPage.VerfiyCartNavigation('https://www.saucedemo.com/cart.html')
        await productPage.verfiyProductName(testData[1].productName,0)
        await checkout.clickOnCheckoutBtn()
        await checkout.verfiyCheckoutUserInfoUrl()
        await checkout.userInfo(positiveData[1].FirstName,positiveData[1].LastName,positiveData[1].ZipCode)
        await checkout.verfiyCheckoutUrl()
        await productPage.verfiyProductName(testData[1].productName,0)
        await productPage.verfiyProductPrice('$9.99',0)
        
    })
    test('verify completed order',async({checkout,productPage})=>{
        await productPage.clickAddToCart(1)
        await productPage.clickCartIcon()
        await productPage.VerfiyCartNavigation('https://www.saucedemo.com/cart.html')
        await productPage.verfiyProductName(testData[1].productName,0)
        await checkout.clickOnCheckoutBtn()
        await checkout.verfiyCheckoutUserInfoUrl()
        await checkout.userInfo(positiveData[0].FirstName,positiveData[0].LastName,positiveData[0].ZipCode)
        await checkout.verfiyCheckoutUrl()
        await productPage.verfiyProductName(testData[1].productName,0)
        await productPage.verfiyProductPrice('$9.99',0)
        await checkout.clickOnFinishBtn()
        await checkout.orderCompleted()
    })
    
})