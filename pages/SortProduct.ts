import{Page,expect} from "@playwright/test"

export class SortProduct{
    readonly page:Page;
    constructor(page:Page){
        this.page= page;
    }
    
    async sortAsceOrder(){
        const product = await this.page.locator('.inventory_item_name').allTextContents()
        const sortProduct = [...product].sort();
        expect (product).toEqual(sortProduct)
    }
    async sortDsecOrder(){
        const product = await this.page.locator('.inventory_item_name').allTextContents()
        const sortProduct = [...product].sort().reverse()
        expect (product).toEqual(sortProduct)
    }
    async sortPriceAscOrder(){
        const productPrice = await this.page.locator('.inventory_item_price').allTextContents()
        const prices = productPrice.map(price=>Number(price.replace('$','')))
        const sortPrice = [...prices].sort((a,b)=>a-b)
        expect(prices).toEqual(sortPrice)

    }
    async sortPriceDecOrder(){
        const productPrice = await this.page.locator('.inventory_item_price').allTextContents()
        const prices = productPrice.map(price => Number(price.replace('$','')))
        const sortPrice = [...prices].sort((a,b)=>b-a)
        expect (prices).toEqual(sortPrice)
    }
    async clickOnCartDropDown(filterValue:string){
        await this.page.locator('.product_sort_container').selectOption(filterValue)
    }
}