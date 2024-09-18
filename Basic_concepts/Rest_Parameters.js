// rest parameters = ( ...rest ) allows a function work with a variable number 
//                      of arguments by bundling them into array
//          spread = expands an array into separate elements 
//            rest = bundles elements into an array



//Combine Strings

function combineStrings(...strings){
    return strings.join( " " );

}
const fullname = combineStrings("Jack","Son");

console.log(fullname);

// GET Average
function getAverage(...numbers){

    let result = 0;
    for ( let number of numbers ){
        result += number;
    }

    return result / numbers.length;
}

const ave = getAverage(81, 82, 83, 85, 90);

console.log(`Your average grade is ${ave}`);

function sum(...numbers){

    let result = 0;
    for ( let number of numbers ){
        result += number;
    }

    return result;
}

const total = sum(1, 2, 3, 4, 5 );
console.log(`Your total is Php ${total}`);


function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "hotdog";

const foods = getFood(food1, food2, food3);

console.log(foods);




