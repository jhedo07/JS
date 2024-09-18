// variable scope = where a variable is recognized and accessible 
//                  (local vs global)
//  Variable decalred inside(locally) a function can't be accessed by the other functions
// Variables declared outside(Globally) a function can be accessible to all
// If a variable is declared both in Local and Global, the function access the local variable first.
// If variable not found insided(Local) a function it will access the variable outside(Global).

// Function with LOCAL variables

function func1(){
    let x = 5;
    console.log(`${x} Local`);
}

function func2(){
    let x = 10;
    console.log(`${x} Local`);
}

func1();
func2();

// Functions with GLOBAL variables

let x = 5;

function func3(){
    console.log(`${x} Global`);
}

function func4(){
    console.log(`${x} Global`   );
}

func3();
func4();