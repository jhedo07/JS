// Arithmetic Operators = operands (values, variables, etc.)
//                         operators(+ - * / )

// let students = 29;
// let teachers = 2;

// add = students += 1;
// diff = students -= 5;
// mul = students *= 2;
// div = students /= 2;
// pow = students **= 2;
// mod = students %= 2;
// teachers++;
// teachers--;


// console.log(`The total number of students are: ${students} `);
// console.log(`One students have joined. Total: ${add}`);
// console.log(`Five students dropped. Total: ${diff}`);
// console.log(`Students were multiplied by two Total: ${mul}`);
// console.log(`Students were divided into two groups so each class have a total of ${div}`);
// console.log(`${div} students in the power of 2 is ${pow} students` );
// console.log(`${div} students has a modulo of ${mod}`);
// console.log(`Teachers have been incremented by one. Total: ${teachers}`);
// console.log(`Teachers have been decremented by one. Total: ${teachers}`);
/*
    Operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

let num;

// num = (5 + 5) ** 2 * 10 / 3 % 2 + 4 - 1; // 5 + 5 = 10
// 10 ** 2 * 10 / 3 % 2 + 4 - 1 // 10 ** 2 = 100
// 100 * 10 / 3 % 2 + 4 - 1 // 100 * 10 = 1000
// 1000 / 3 % 2 + 4 - 1 // 1000 / 3 = 333.333
// 333.333 % 2 + 4 - 1 // 333.333 % 2 = 1.333
// 1.333 + 4 - 1 // 1.333 + 4  = 5
// 5 - 1 = 4
//4 

num = 5 + (50 - 25) - 5 / 2 ** 5 % 2 * 3;
// 5 + 25 - 5 / 2 ** 5 % 2 * 3; // 50 -25 = 25
// 5 + 25 - 5 / 2 ** 5 % 2 * 3; // 2 ** 5 = 32
// 5 + 25 - 5 / 32 % 2 * 3; 5 / 32 = 0.15625
// 0.15625 (since 0.15625 is less than 2, the modulus operation returns the value itself)
// 5 + 25 - 0.15625 * 3 // 0.15625 * 3 = 0.46875
//  5 + 25 - 0.46875 // 5 + 25 = 30
// 30 -  0.46875 = 29.53125
// 30 -  0.46875 = 29.53125


console.log(num);

