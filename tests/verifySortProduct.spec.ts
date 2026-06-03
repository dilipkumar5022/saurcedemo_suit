import{test} from '../fixture/customerFixture'

test.describe('To verify product sort',()=>{
    test.beforeEach('login',async({loginPage})=>{
         await loginPage.naviagtionUrl('https://www.saucedemo.com/')
         await loginPage.login('standard_user','secret_sauce','https://www.saucedemo.com/inventory.html')
    })
    test('Sort by Name (A to Z)',async({sortProduct})=>{
        await sortProduct.clickOnCartDropDown('az')
        await sortProduct.sortAsceOrder()
    })
    test('Sort by Name (Z to A)',async({sortProduct})=>{
        await sortProduct.clickOnCartDropDown('za')
        await sortProduct.sortDsecOrder()
    })
    test('Sort by Price (Low to High)',async({sortProduct})=>{
        await sortProduct.clickOnCartDropDown('lohi')
        await sortProduct.sortPriceAscOrder()
    })
    test('Sort by Price (High to Low)',async({sortProduct})=>{
        await sortProduct.clickOnCartDropDown('hilo')
        await sortProduct.sortPriceDecOrder()
    })
    
})