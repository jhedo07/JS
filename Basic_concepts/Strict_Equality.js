//  = assignment operator
// == compaison operator (Compare if values are equal)
// === strict equality operator (compares if values and datatype are equal)
// != inequality operator 
// !== strict inequality operator

const PI = 3.14;

if(PI == "3.14"){                   // == compaison operator (Compare if values are equal)
    console.log("3.14 is PI")
}else{
    console.log("3.14 is NOT PI");
}

if(PI === "3.14"){                  // === strict equality operator (compares if values and datatype are equal)
    console.log("3.14 is PI")
}else{
    console.log("3.14 is NOT PI");
}

if(PI != "3.14"){                   // != inequality operator 
    console.log("3.14 is NOT PI");
}else{
    console.log("3.14 is PI")
}

if(PI !== "3.14"){                  // !== strict inequality operator
    console.log("3.14 is NOT PI");
}else{
    console.log("3.14 is PI")
}