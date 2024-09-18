// switch  = can be an efficient replacement to many else if statements

let month = 2;

switch(month){
    case 1:
        console.log("The 1st month of the year is January");
        break;
    case 2:
        console.log("The 2nd month of the year is February");
        break;
    default:
        console.log(`${month} is not a month`);
}