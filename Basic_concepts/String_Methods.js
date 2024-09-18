// String methods = allow you to manipulate and work with text (Strings)

let userName = "JACKSON jack123"

console.log(userName);
console.log(userName.charAt(0)); // Selects one character
console.log(userName.indexOf("A")); // identifies the order of a Char
console.log(userName.lastIndexOf("a"));
console.log(userName.length); // Determines the length of a string
console.log(userName.trim()); // deletes white spaces
console.log(userName.toUpperCase()); // convert string to Uppercase
console.log(userName.toLowerCase()); // convert string to Lowercase
console.log(userName.repeat(2)); // repeats a String
console.log(userName.startsWith("J"));
console.log(userName.startsWith(" "));
// .endsWtih()
console.log(userName.replaceAll(" ",","));