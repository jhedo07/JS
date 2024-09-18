// .map() = accepts a callback ang applies that function to each element of an array, 
//          then return a new array

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

function square(element){
    return Math.pow(element, 2)

}

function cube(element){
    return Math.pow(element, 3)
}
console.log(cubes);

const students = ["Jackson", "Pablo", "Gregorio"];

const toUpperCaseStudents = students.map(UpperCase);
const toLowerCaseStudents = students.map(lowerCase);

function UpperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

console.log(toUpperCaseStudents);
console.log(toLowerCaseStudents);

const dates = ["20-01-2024", "20-07-2024", "20-02-2024"];
const dateFormats = dates.map(dateFormat);

function dateFormat(element){
    const parts = element.split("-");
    return `${parts[1]}-${parts[0]}-${parts[2]}}`
}

console.log(dateFormats);
