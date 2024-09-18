// CALCULATOR PROGRAM

function appendToDisplay(input) {
    display.value += input;
}

function clearToDisplay() {
    display.value = " ";

}

function calculate() {

    try {
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}