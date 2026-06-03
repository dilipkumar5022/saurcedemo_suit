import {Page,expect} from "@playwright/test"

export class CartPage{
    readonly page:Page
    constructor(page:Page){
        this.page = page
    }
    async removeAllProduct(){
        while(await this.page.getByRole('button',{name:'Remove'}).count() > 0){
            await this.page.getByRole("button",{name:'Remove'}).first().click()
        } 
      
    }
    async removeHalfProduct(){
        while(await this.page.getByRole('button',{name:'Remove'}).count() > 2){
            await this.page.getByRole("button",{name:'Remove'}).first().click()
        } 
      
    }
    async verifyProductRemoved(productName: string) {
        await expect(this.page.getByText(productName)).toHaveCount(0);

    }
    async clickShoppinBtn(){
        await this.page.getByRole('button',{name:'Continue Shopping'}).click()
    }
    

   
}