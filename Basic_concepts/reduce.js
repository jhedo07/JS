// .reduce() = reduce the elements of an array to a single value

const prices = [5, 10, 15, 20, 30];

const total = prices.reduce(sum);

console.log(`Total is Php ${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}

const grades = [75, 80, 85, 90, 95, 100];

const highGrade = grades.reduce(highestGrade);
const lowGrade = grades.reduce(lowestGrade);

console.log(`Highest grade is ${highGrade}`)
console.log(`Lowest grade is ${lowGrade}`);

function highestGrade(accumulator,element){
    return Math.max(accumulator, element);
}

function lowestGrade(accumulator, element){
    return Math.min(accumulator, element);
}