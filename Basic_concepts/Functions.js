// function() = A section or reusable code.
//              Declare code once , use it whenever you want.
//              Call the function to execute the code.


function EvenOdd(){
    for (let i = 1; i <= 20; i++){
        if ( i % 2 === 0){
            console.log(`${i} is an even number`)
        } else {
            console.log(`${i} is an odd number`)
        }
    } 
}
EvenOdd();

function isValidEmail(email){

    return email.includes("@") ? true : false;

    // if ( email.includes("@") ){
    //     return true;
    // } else {
    //     return false;
    // }
}

console.log(isValidEmail("jackson"));

// function add( x , y ){
//     return x + y;
// }
// function sub( x , y ){
//     return x - y;
// }
// function mul( x , y ){
//     return x * y;
// }
// function div(x , y){
//     return x / y;
// }

// console.log(div(2,3));

    // using the Ternary operator
    // return number % 2 === 0 ? true : false;

    // if ( number % 2 === 0 ){
    //     return true;
    // }else{
    //     return false;
    // }

// console.log(isEven(9))
