// .filter() = creates a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6];

let evenNum = numbers.filter(isEven);
let oddNum = numbers.filter(isOdd);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

console.log(evenNum);
console.log(oddNum);

const ages = [15, 16, 17, 18, 19, 20];

const adults = ages.filter(isAdult);
const child = ages.filter(isChild);

console.log(adults);
console.log(child);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}

const words = ["Jackson", "Pablo", "Gregorio"];

const longNames = words.filter(longName);
const shortNames = words.filter(shortName);

console.log(longNames);
console.log(shortNames);

function longName(element){
    return element.length >= 6;
}

function shortName(element){
    return element.length < 6;
}

