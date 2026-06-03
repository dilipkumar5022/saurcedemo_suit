import{test} from "../fixture/customerFixture"
import { CartPage } from "../pages/cartPage"
import { excelReader } from "../utils/excelReader"
const testData:any = excelReader('/Users/dilipkumarketha/Desktop/playwright/project5/resource/Product_Validation.xlsx','ProductValidation')
test.describe("Verfiy Cart page",()=>{
    test.beforeEach('login',async({loginPage})=>{
         await loginPage.naviagtionUrl('https://www.saucedemo.com/')
         await loginPage.login('standard_user','secret_sauce','https://www.saucedemo.com/inventory.html')
    })
    test('Add product to cart',async({productPage})=>{
        console.log(testData[1].productName)
        await productPage.clickAddToCart(1)
        await productPage.clickCartIcon()
        await productPage.VerfiyCartNavigation('https://www.saucedemo.com/cart.html')
        await productPage.verfiyProductName(testData[1].productName,0)
    })
    test('Add multiple products',async({productPage})=>{
        for(let i=0;i<testData.length;i++){
            const num = i+1
            const cartCount = num.toString()
            await productPage.verifySingleProduct(i,cartCount)
       
        }
        //click on carticon
        await productPage.clickCartIcon()
        await productPage.VerfiyCartNavigation('https://www.saucedemo.com/cart.html')
        //verify all product are add or not
        for(let i=0;i<testData.length;i++){
            await productPage.verfiyProductName(testData[i].productName,i)
        }

    })
    test('Remove product from cart page',async ({productPage,cartPage})=>{
        //add product
         for(let i=0;i<testData.length;i++){
            const num = i+1
            const cartCount = num.toString()
            await productPage.verifySingleProduct(i,cartCount)
       
        }
        //click on carticon
        await productPage.clickCartIcon()
        //remove product from cart
        await cartPage.removeAllProduct()
       
       //verfiy product are removed
       for(let i=0;i<testData.length;i++){
            await cartPage.verifyProductRemoved(testData[i].productName)
       }
    })
    test("Verify cart quantity",async({productPage})=>{
        await productPage.clickAddToCart(1)
        await productPage.verifyCartCount('1')
        await productPage.clickCartIcon()
        await productPage.VerfiyCartNavigation('https://www.saucedemo.com/cart.html')
        await productPage.verfiyProductName(testData[1].productName,0)
        await productPage.verifyCartCount('1')
    })
    test("Continue shopping button",async({cartPage,loginPage,productPage})=>{
        await productPage.clickAddToCart(1)
        await productPage.verifyCartCount('1')
        await productPage.clickCartIcon()
        await productPage.VerfiyCartNavigation('https://www.saucedemo.com/cart.html')
        await productPage.verfiyProductName(testData[1].productName,0)
        await productPage.verifyCartCount('1')
        await cartPage.clickShoppinBtn()
        await loginPage.verifyLogin('https://www.saucedemo.com/inventory.html')
    })
})