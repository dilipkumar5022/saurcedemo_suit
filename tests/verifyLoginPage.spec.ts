import {test} from "../fixture/customerFixture"
import { excelReader } from "../utils/excelReader"

const testData:any = excelReader('/Users/dilipkumarketha/Desktop/playwright/project5/resource/SauceDemo_LoginData_Status.xlsx','LoginData')
test("to verify login page with valid data",async({loginPage})=>{
    await loginPage.naviagtionUrl('https://www.saucedemo.com/')
    await loginPage.login('standard_user','secret_sauce','https://www.saucedemo.com/inventory.html')
})
console.log(testData)
for(const data of testData){
    test(`Login Data ${data.username}`,async({loginPage})=>{
        await loginPage.loginDataDriven('https://www.saucedemo.com/',data.username,data.password)
        if(data.status === 'Success'){
            await loginPage.verifyLogin(data.expected_result)
        }
        else{
            await loginPage.errorMessage(data.expected_result)
        }
    })
}