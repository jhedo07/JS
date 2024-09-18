// classList = Element property in Javascript used to interact
//              with an element's list of classes (CSS classes)
//              Allows you to make reusable classes for many elements 
//              accross your webpage.

// add()
// remove()
// toggle(Remove if present, add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");
// add()
myButton.classList.add("enabled");

// remove()
// myButton.classList.remove("enabled");

// toggle(Remove if present, add if not)
myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});
myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});
// replace(oldClass, newClass)
myButton.addEventListener("click", event => {

    // contains()
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += " 😒";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }

   
});

