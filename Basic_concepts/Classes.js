// class = (ES6 feature) provides a more structured and cleaner way to work
//          with objects compared to traditional constructor functions 
//          ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name,
        this.price = price;
    }

    displayProduct(){
        console.log(`item: ${this.name}`);
        console.log(`price: Php ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 350);
const product2 = new Product("Pants", 500);

product1.displayProduct();
const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): Php ${total.toFixed(2)}`);

product2.displayProduct();
const total2 = product2.calculateTotal(salesTax);
console.log(`Total pricec (with tax): Php ${total2.toFixed(2)}`);