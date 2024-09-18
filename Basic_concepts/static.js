// static = keyword that defines properties or methods that belong 
//          to a class itself rather than the objects created 
//          from that class (Class owns anything static, but not the objects)

// Example 01
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log("Example 01");
console.log(`PI is = ${MathUtil.PI}`);
console.log(`The diameter is ${MathUtil.getDiameter(10)}`);
console.log(`The area is ${MathUtil.getArea(10)}`);

// Exmaple 02

class User{

    static userCount = 0;
    
    constructor(username){
        this.username = username;
        User.userCount++;

    }

    static getUserCount(){
        console.log(`Number of users online: ${User.userCount}`);
    }

    sayHello(){
        console.log(`Hello my username is ${this.username}`);
    }
}
console.log("Example 02");

const user1 = new User("jackson");
const user2 = new User("Greg");

user1.sayHello();
user2.sayHello();
User.getUserCount();