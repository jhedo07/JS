
// Array of Objects

const fruits = [{name: "Apple", color: "Red", calories: "95"}, 
                {name: "Orange", color: "Orange", calories: "85"},
                {name: "Banana", color: "Yellow", calories: "75"},
                {name: "Coconut", color: "White", calories: "65"},
                {name: "Blueberry", color: "Indigo", calories: "55"}
];
// reduce() method
console.log("reduce() method");
const maxFruit = fruits.reduce( (max, fruit) => fruit.calories > max.calories ? fruit : max);

console.log(maxFruit);

//map() Method
console.log("map() Method");
const fruitNames = fruits.map(fruit => fruit.name);
const lowCaloFruits = fruits.filter(fruit => fruit.calories >= 75);
console.log(fruitNames);
console.log(lowCaloFruits);

// forEach() Method
console.log("forEach() Method");
fruits.forEach(fruit => console.log(fruit));