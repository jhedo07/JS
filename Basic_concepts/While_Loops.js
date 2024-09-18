// While loops = repeat some code WHILE some condition is TRUE


let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username =window.prompt("Enter Username: ");
    password =window.prompt("Enter Password: ");

    if(username === "username" && password === "pass"){
        loggedIn = true;
        console.log("You are logged in!")
    }else{
        console.log("Invalid credentials!, Please try again");
    }
}

// let userName = "";

// while(userName === "" || userName === null){
//     userName = window.prompt(`Enter your username: `);
// }

// console.log(`Hello ${userName}`);