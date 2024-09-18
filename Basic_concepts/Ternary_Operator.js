// ternary operator = a shortcut to if{} and else{} statments
//                     helps to assign a vvariable based on condition
//                      condition ? condIfTrue : condIfFalse;

let age = 21;
let message = age >= 18 ? "You're an Adult" : "You're a minor";
console.log(message);

let purchaseAmount = 120;
let discount = purchaseAmount >= 100 ? 10 : 0;
let totalAmount = purchaseAmount - (purchaseAmount * (discount / 100));
console.log(`Your total is PHP ${totalAmount}`);