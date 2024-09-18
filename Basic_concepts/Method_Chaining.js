
// Method Chaining = Calling method after one another in
//                      one continuous line of code.

let Name = window.prompt("Enter your username: ");
// ------------- NO METHOD CHAINING-----------------------

 Name = Name.trim();
 let letter  = Name.charAt(0);
 letter = letter.toUpperCase();

 let extraChars = Name.slice(1);
 extraChars = extraChars.toLowerCase();             
 Name = letter + extraChars;
 
 console.log(Name);

// -------------- METHOD CHAINING ------------------

Name = Name.trim().charAt(0).toUpperCase() + Name.trim().slice(1).toLowerCase();

console.log(Name);