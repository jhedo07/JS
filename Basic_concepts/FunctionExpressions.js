// function declaration = define a reusable block of code that
//                          performs a specific task

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(square);

console.log("This is a function declaration");
console.log(squares);

function square(element){
    return Math.pow(element, 2);
}

// function expressions = a way to define functions as values or variables

const squares2 = numbers.map(function square(element){
    return Math.pow(element, 2);
});

console.log("This is a function expression");
console.log(squares2);

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
console.log(cubes);

const evenNum = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(`Even Numbers ${evenNum}`);

const oddNum = numbers.filter(function(element){
    return element % 2 !== 0;
})
console.log(`Odd numbers ${oddNum}`);

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});
console.log(`The sum of numbers is ${total}`);
