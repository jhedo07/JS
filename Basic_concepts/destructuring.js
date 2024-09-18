// destructuring = extract values from arrays and objects,
//                  then assign them to a variable in a convenient way
//                  [] = to perfrom array destructuring 
//                  {} = to perform object destructuring
//                  5 examples

//Example 05
// Extract values from Objects
console.log("--Example 05--");
console.log("Extract values from Objects");

const person1 = {
    firstName: "Jack",
    secondName: "Son",
    age: 24,
    stats: "single",
}

const person2 = {
    firstName: "Greg",
    secondName: "Orio",
    age: 24,
    // stats: "double",
}
const {firstName, secondName, age, stats="unkown"} = person1;

console.log(`First name: ${firstName}`);
console.log(`Second name: ${secondName}`);
console.log(`Age: ${age}`);
console.log(`Status: ${stats}`);

// Example 04
// Destructure in function parameters

console.log("--Example 04--");
console.log("Destructure in function parameters");
function displayPerson({firstName, secondName, age, stats="unkown"}){
    console.log(`Name: ${firstName}${secondName}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${stats}`);
}

displayPerson(person1);
displayPerson(person2);


// Example 03
// swap 2 elemetns in an array
console.log("--Example 03--");
console.log("Swap 2 elemetns in an array");

const colors = ["red", "green", "blue", "black", "white"];

console.log(colors);

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//Example 02
// Assign array elements to variables
console.log("--Example 02--");
console.log("Assign array elements to variables");


const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(`First color: ${firstColor}`);
console.log(`Second Color: ${secondColor}`);
console.log(`Third color: ${thirdColor}`);
console.log(`Extra colors: ${extraColors}`);

// Example  01
// swap the value of two variables
console.log("--Example 01--");
console.log("Swap the value of two variables");

let a = 1;
let b = 2;

console.log(`a = ${a} \nb = ${b}`);

[a,b] = [b, a]

console.log(`a = ${a} \nb = ${b}`);


