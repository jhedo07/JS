// closure = A function defined inside another function,
//              the inner function has access to the variables
//              and scope of the outer function.
//              Allow for private variables and state maintenance 
//              Used frequently in JS frameworks: React, Vue, Angular

// Example 03
function createGame() {

    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}

const game = createGame();

game.increaseScore(10);
game.increaseScore(18);
game.decreaseScore(5);
console.log(`The final score is ${game.getScore()}`);

// Example 02
function countCreator() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }
    return {increment, getCount};
}

const counter = countCreator();

counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);


// Example 01
function outer () {

    let message = "Hello";
    function inner () {
        console.log(message);
    }

    inner();
}

outer();