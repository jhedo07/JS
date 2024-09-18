// error = An object that is created to represent a problem that occurs
//          Occur often with user input or establish a connection

// try { } = encloses code that might potentionally cause an error
// catch { } = Catch and handle any errors from try { }
// finally { } = (optional) always executes. Used mostly for clean up
//                 ex. close files, close connections, release resources 

// Example 02

try {
    const divident = Number(window.prompt("Enter a divident: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if (divisor == 0 ) {
        throw new Error(window.alert("You can't divide by zero!"));
    }
    if (isNaN(divident) || isNaN(divisor)) {
        throw new Error(window.alert("Values must be a number!"));
    }
    const result = divident / divisor;
    console.log(result);
}

catch (error) {
    console.log(error);
}

console.log("Program end");



// Example 01
try {
    console.log("Hello");
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
} 
catch(error) {
    console.error(error);
} 
finally {
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}

console.log("You have reached the end!");