// NUMBER GUESSING GAME
const minNum = 1;
const maxNum = 100;

const subBtn = document.getElementById("submit");
const num = document.getElementById("num");
const res = document.getElementById("result");
const numberInput = document.getElementById("guessInput");
const playAgainBtn = document.getElementById("playAgain")

let ans;
let attempts;
let running;

function startGame(){
    attempts = 0;
    running = true;
    ans = Math.floor(Math.random() * (maxNum - minNum));
    res.textContent = `Guess a number between ${minNum} to ${maxNum}`;
    numberInput.value = "";
    num.textContent = "";
    playAgainBtn.style.display = " none ";

}

function checkGuess(){
    const guess = Number(numberInput.value);

    if ( isNaN( guess )) {
        res.textContent = `Please enter a valid number`;
    } else if (guess < minNum || guess > maxNum) {
        res.textContent = `Please enter a number between ${minNum} and ${maxNum}`;
    } else {
        attempts++;
        if ( guess < ans ){
            res.textContent = `${guess} is TOO LOW, TRY AGAIN`;
        }else if ( guess > ans) {
            res.textContent = `${guess} is TOO HIGH, TRY AGAIN`;
        } else {
            num.textContent = ans;
            res.textContent = `CORRECT!, the answer was ${ans}. It took you ${attempts} attempts`
            running = false;
            playAgainBtn.style.display = "block"
        }
    }
}

subBtn.onclick = function(){
    if (running){
        checkGuess();
    }
};

playAgainBtn.onclick = function(){
    startGame();
};
startGame();


// const miNum = 1;
// const maxNum = 100;
// const ans = Math.floor(Math.random() * (maxNum - miNum));
// let attempts = 0;
// let guess;
// let running = true;
 
// while(running){
//     (`Guess a number between ${miNum} to ${maxNum}`);
//     guess = Number(guess);

//     if(isNaN(guess)){
//        window.alert("Please enter a valid number");
//     }else if(guess < miNum || guess > maxNum ){
//         window.alert("Please enter a valid number");
//     }else{
//         attempts++;
//         if(guess < ans){
//             window.alert("TOO LOW!, TRY AGAIN");
//         }else if(guess > ans){
//             window.alert("TOO HIGH!, TRY AGAIN!");
//         }else{
//             window.alert(`CORRECT!, The answer was ${ans}. It took you ${attempts} attempts`);
//             running = false;
//         }
//     }
// }