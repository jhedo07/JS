// array = a variable like structure that can hold more than one value

let fruits = ["apple", "orange", "banana"];

// fruits.push("coconut"); // add an element at the end 
// fruits.pop();       // removes the last element
// fruits.unshift("mango"); // add an element at the beginning;
// fruits.shift(); // removes an element from the beginning
fruits.sort(); // sort the element 
// fruits.sort().reverse(); // sort the element in reverse.

// let numOfFruits = fruits.length(); // defines the number of an element inside an array
// let index = fruits.indexOf("apple"); // defines the index of an element


// for loop shortcut
for ( fruit of fruits ){
    console.log(fruit);
}

console.log(".");

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("Reverse Loop");

for( let x = fruits.length -1; x >=0; x-- ){
    console.log(fruits[x]);
}

