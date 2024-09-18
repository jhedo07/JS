// this = reference to the object where THIS is used 
//          (the object depends on the immediate context)
//          person.name = this.name
//          Does not work with Arrow functions

const perons1 = {
    name: "jackson",
    drink: "Classic Drinks",
    sayHello: function(){console.log(`Hi I am ${this.name}`)},
    faveDrink: function(){console.log(`I prefer ${perons1.drink}`)}
}

perons1.sayHello();
perons1.faveDrink();