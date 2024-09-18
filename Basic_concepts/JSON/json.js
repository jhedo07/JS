// JSON = (JavaScript Object Notation) data-interchange format used 
//          for exchanging data between a server and a web application 
//          JSON files {key:value} OR [value1, value2, value3]

//          JSON.stringify() = converts a JS object to a JSON string.
//          JSON.parse() = converts a JS string to a JSON object.


fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.log(error));

const names = `["Macario", "Pablo", "Jackson", "Gregorio"]`;
const person = `{
    "name": "Macario",
    "age" : 24,
    "isEmployed": true,
    "hobbies": ["Playing", "Watching"] 
}`;
const people = `[{
    "name": "Macario",
    "age" : 24,
    "isEmployed": true
},
{
    "name": "Gregorio",
    "age" : 25,
    "isEmployed": false
},
{
    "name": "Pablo",
    "age" : 26,
    "isEmployed": true
},
{
    "name": "Jackson",
    "age" : 27,
    "isEmployed": false
}]`;


//          JSON.stringify() = converts a JS object to a JSON string.
// const stringNames = JSON.stringify(names);
// console.log(stringNames);
// const stringPerson = JSON.stringify(person);
// console.log(stringPerson);
// const stringPeople = JSON.stringify(people);
// console.log(stringPeople);

//          JSON.parse() = converts a JS string to a JSON object.// enclosed with ` `

// const parseNames = JSON.parse(names);
// console.log(parseNames);
// const parsePerson = JSON.parse(person);
// console.log(parsePerson);
// const parsePeople = JSON.parse(people);
// console.log(parsePeople);