// NodeList = static collection of HTML elements by (id, class, element)
//              can be created by using querySelectorAll()
//              Similar to an array, but no (map, filter, reduce)
//              NodeList won't udpate to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

// ADD ELEMENT
// STEP 1
const newButton = document.createElement("button");
// STEP 2
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
// STEP 3
document.body.appendChild(newButton);

// re-query to add it to the nodelist
buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

buttons.forEach(buttons => {
    // ADD HTML/CSS PROPERTIES
    buttons.style.backgroundColor = "green";

    // CLICK EVENTLISTENER
    buttons.addEventListener("click", event => {
        buttons.style.backgroundColor = "tomato";
        buttons.textContent += "😁";
    });

    // MOUSEOVER + MOUSEOUT event listener
   buttons.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "lightgreen";
   });

   buttons.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "green";
   });
   
});


console.log(buttons);