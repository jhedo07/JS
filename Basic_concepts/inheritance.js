// inheritance = allows a new class to inherit properties and methods
//                  from an existing class (parent -> child)
//                  helps with code reusability

class People{
    static randomID = Math.floor(Math.random() * 1000);

    constructor(name){
        this.name = name;
    }

    getID(){
        console.log(`ID number: ${People.randomID}`);
    }
}

class Students extends People{

    getStudentName(){
        console.log(`Student name: ${this.name}`);
    }
}
class Employee extends People{

    getEmployeeName(){
        console.log(`Employee Name: ${this.name}`);
    }
}

const id = new People();
const students = new Students("jackson");
const employee = new Employee("Pablo")

id.getID();
students.getStudentName();
id.getID();
employee.getEmployeeName();

