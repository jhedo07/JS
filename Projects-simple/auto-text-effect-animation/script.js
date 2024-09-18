
const containerEl = document.querySelector(".container");

const learnings = ["Javascript", "Python", "Java", "mySQL"];

let learningsIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = 
    `<h1> Hello "${learnings[learningsIndex].slice(0, characterIndex)}"</h1>`;
    
    if (characterIndex === learnings[learningsIndex].length) {
        learningsIndex++
        characterIndex = 0;
    }

    if (learningsIndex === learnings.length) {
        learningsIndex = 0;
    }

    setTimeout(updateText, 400);
}