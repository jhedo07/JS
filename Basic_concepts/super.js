// super = keyword is used in classes to call the constructor or
//          access the properties and methods of a parent (superclass)
//          this = this object
//          super = the parent

class Pokemon {

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }   
    Types(){
        console.log(`${this.name} is a ${this.type} type`);
    }
}

class Caterpie extends Pokemon{
    constructor(name, type) {
        super(name, type);
    }

    bug(){
        console.log(`Pokemon name: ${this.name}`);
        super.Types(this.type);
    }
}

class Rayquaza extends Pokemon {
    constructor(name, type){
        super(name, type);
    }

    dragon(){
        console.log(`Pokemon name: ${this.name}`);
        super.Types(this.type);
    }
}

const caterpie = new Caterpie("Caterpie","Bug");
const rayquaza = new Rayquaza("Rayquaza","Dragon");

caterpie.bug();
rayquaza.dragon();
