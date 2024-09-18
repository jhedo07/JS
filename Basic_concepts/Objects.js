// Object = a collection of related properties and/or methods 
//          can represent real world objects (people, products, places)
//          object = {key:value,
//                      function()}

// Function Expression
const person1 = {
    firstName: "Jack",
    lastName: "Son",
    age: 25,
    isEnrolled: false,
    sayHello: function(){console.log("I am Jack")},
}

// Arrow Function
const person2 = {
    firstName: "Greg",
    lastName: "Orio",
    age: 24,
    isEnrolled: true,
    sayHello: () => console.log("I am Greg"),
}

person1.sayHello();
person2.sayHello();