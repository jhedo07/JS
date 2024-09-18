// TEMPERATURE CONVERSION PROGRAM

const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const resultTemp = document.getElementById("result_temp");

let temp;

function convert(){
    if (toFahrenheit.checked) {
        temp = Number(textbox.value);
        temp  = temp * 9 / 5 + 32;
        resultTemp.textContent = temp.toFixed(1) + "°F";
    } else if (toCelsius.checked) {
        temp = Number(textbox.value);
        temp  = ( temp  - 32 ) * ( 5 /9 );
        resultTemp.textContent = temp.toFixed(1) + "°C";
    } else {
       
        resultTemp.textContent = "Select a unit";
    }

}