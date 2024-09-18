// Arrow Functions = a concise way to write function expressions
//                      good for simple functions that you use only once 
//                      (parameters) => some code

//Example 01

const hello = (name, age) => {console.log(`Hello ${name}`)
                                console.log(`You are ${age} years old`)};
                                
hello("Mac", 24);

//Example 02

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(`Squares: ${squares}`);

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(`Cubes: ${cubes}`);

const evenNum = numbers.filter((element) => element % 2 === 0);
console.log(`Even Numbers: ${evenNum}`);

const oddNum = numbers.filter((element) => element % 2 !==0);
console.log(`Odd Numbers: ${oddNum}`);

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(`Total: ${total}`);