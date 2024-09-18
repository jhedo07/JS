// constructor =  special method for defining the properties 
//                  and methods of objects

function Car(type, model, year, color){
    this.type = type,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2024, "Black");

console.log(car1.type);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

car2.drive();