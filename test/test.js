import { expect } from 'chai';
import * as coffeeMachines from "../data.js";

describe("Property types", () => {
    it("Indicate types of the property", () => {
        var item = coffeeMachines.getItem("Barista Express");
        expect(item.name).to.be.a('string');
    }) ;
    it("fails to verify the type", () => {
        var item = coffeeMachines.getItem("Barista Express");
        expect(item.price).to.not.be.a('string');
    });
});

// item to test add and delete functions
const newItem = {
    name: "Baristo", 
    manufacturer :"Saeco", 
    price : 1200, 
    feature : ["automatic"]
};  

describe("Adding object", () => {
    it("should add new item", () => {  
        const result = coffeeMachines.addItem(newItem);
        expect(result).to.be.true;
    }); 
    it("should not add item if nothing is passed", () => {
        const result = coffeeMachines.addItem();
        expect(result).to.be.false;
    });
    it("should not add item if duplicated item is passed", () => {
        const result = coffeeMachines.addItem(newItem);
        expect(result).to.be.false;
    });
    it("should not add item if it does not have unique identifier(name)", () =>{
        const result = coffeeMachines.addItem({
            price: 400
        });
        expect(result).to.be.false;
    });
});

describe("Delete item", () => {
    it("should delete item", () => {
        const unwantedItemName = newItem.name;
        const result = coffeeMachines.deleteItem(unwantedItemName);
        expect(result).to.be.true;
    });
    it("should not delete item with a wrong unique id(name)", () => {
        const result = coffeeMachines.deleteItem('random-name');
        expect(result).to.be.false;
    });
});