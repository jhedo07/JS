// nested objects = Objects inside of other objects.
//                  Allows you to represent more complex data structures
//                  Child object is enclosed by a parent object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyword{}, Mouse{}, Monitor{}}

class Person {
    constructor (name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);

    }
}

class Address {
    constructor (street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Jack", 24, "Acop", "LT", "Ph");

console.log(`Name: ${person1.name}\nAge: ${person1.age}\nAddress:\nStreet: ${person1.address.street}\nCity: ${person1.address.city}\nCountry: ${person1.address.country}`);
