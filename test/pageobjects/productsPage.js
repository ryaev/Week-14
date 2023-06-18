class ProductsPage{
    get titlePage(){
        return $("#header_container > div.header_secondary_container > span");
    }
}

class ItemOne{
    get itemImg(){
        return $("#item_4_img_link > img");
    }
    get itemTitle(){
        return $("#item_4_title_link > div");
    }
    get itemDescrip(){
        return $("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > div");
    }
    get itemPrice(){
        return $("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div");
    }
    get itemAddCartButton(){
        return $("#add-to-cart-sauce-labs-backpack");
    }
    get itemRemCartButton(){
        return $("#remove-sauce-labs-backpack");
    }
    async itemAddCartButtonClick(){
        await this.itemAddCartButton.click();
    }
    async itemRemCartButtonClick(){
        await this.itemRemCartButton.click();
    }
}

export const productsPage = new ProductsPage();
export const itemOne = new ItemOne();