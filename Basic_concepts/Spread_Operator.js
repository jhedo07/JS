// Spread Operator = " ... ", allows an iterable such as an array or string to be expanded 
//                          into separate elements  ( unpacks the elements )

let num = [1, 2, 3, 4, 5];

let max = Math.max( ...num );
console.log(max);

let name = "jackson";

let letters = [...name].join("-");
console.log(letters);

let fruits = ["apple", "orange", "banana"];
let veg = ["Cabbage", "Potato"];

let foods = [... fruits, ... veg, "mango", "tomato"];
console.log(foods);