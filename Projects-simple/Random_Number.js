// Random Number  Generator 

const rollBtn = document.getElementById("rollbtn");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

rollBtn.onclick = function() {
    randomNum = Math.floor(Math.random() * max ) + min;
    myLabel.textContent = randomNum;
}

//Roll a Dice
// let randomNum = Math.floor(Math.random() * 6) + 1;
// console.log(randomNum);