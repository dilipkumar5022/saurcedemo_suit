import {test} from "../fixture/customerFixture"
import { excelReader } from "../utils/excelReader"
const testData:any = excelReader('/Users/dilipkumarketha/Desktop/playwright/project5/resource/Product_Validation.xlsx','ProductValidation')
const positiveData:any = excelReader('/Users/dilipkumarketha/Desktop/playwright/project5/resource/SauceDemo_Checkout_TestData.xlsx','PositiveData')
const negativeData:any = excelReader('/Users/dilipkumarketha/Desktop/playwright/project5/resource/SauceDemo_Checkout_TestData.xlsx','NegativeData')

test.describe('End-to-End Test Cases',()=>{
    test('Login → Add Product → Checkout → Logout',async({loginPage,productPage,checkout})=>{
        await loginPage.naviagtionUrl('https://www.saucedemo.com/')
        await loginPage.login('standard_user','secret_sauce','https://www.saucedemo.com/inventory.html')
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
    test('Login → Add Multiple Products → Checkout',async({loginPage,checkout,productPage})=>{
        await loginPage.naviagtionUrl('https://www.saucedemo.com/')
        await loginPage.login('standard_user','secret_sauce','https://www.saucedemo.com/inventory.html')
        for(let i=0;i<6;i++){
            const num = i+1
            const cartCount = num.toString()
            await productPage.verifySingleProduct(i,cartCount)
        }
        await productPage.clickCartIcon()
        await productPage.VerfiyCartNavigation('https://www.saucedemo.com/cart.html')
        for(let i=0;i<6;i++){
            await productPage.verfiyProductName(testData[i].productName,i)
        }
        await checkout.clickOnCheckoutBtn()
        await checkout.verfiyCheckoutUserInfoUrl()
        await checkout.userInfo(positiveData[0].FirstName,positiveData[0].LastName,positiveData[0].ZipCode)
        await checkout.verfiyCheckoutUrl()
        await checkout.clickOnFinishBtn()
        await checkout.orderCompleted()


    })
    // test('Login → Remove Product → Checkout',async({checkout,productPage,cartPage,loginPage})=>{
    //     await loginPage.naviagtionUrl('https://www.saucedemo.com/')
    //     await loginPage.login('standard_user','secret_sauce','https://www.saucedemo.com/inventory.html')
    //     for(let i=0;i<6;i++){
    //         const num = i+1
    //         const cartCount = num.toString()
    //         await productPage.verifySingleProduct(i,cartCount)
    //     }
    //     await productPage.clickCartIcon()
    //     await productPage.VerfiyCartNavigation('https://www.saucedemo.com/cart.html')
    //     for(let i=0;i<6;i++){
    //         await productPage.verfiyProductName(testData[i].productName,0)
    //     }
    //     await cartPage.removeAllProduct()

    // })
})