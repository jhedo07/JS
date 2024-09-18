// eventListener  = Listen for specific event to create interactive web pages
//                  events: click, mouseover, mouseout
//                  .addEventListener(event, callback);


const myBox = document.getElementById("myBox");

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 🤕";
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Dont do it 😒";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "  Click Me 😊"
});

const myBox2 = document.getElementById("myBox2");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
    myBox2.style.backgroundColor = "tomato";
    myBox2.textContent = "Ouch! 🤕";
});

myButton.addEventListener("mouseover", event => {
    myBox2.style.backgroundColor = "yellow";
    myBox2.textContent = "Dont do it 😒";
});

myButton.addEventListener("mouseout", event => {
    myBox2.style.backgroundColor = "lightgreen";
    myBox2.textContent = "  Click Me 😊"
});