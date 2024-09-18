// element selectors = Methods used to target and manipulate HTML elements
//                      They allow you to select one or multiple HTML elements
//                      from the DOM (Document Object Model)

// 1. document.getElementByID()      //ELEMENT or NULL
// 2. documnet.getElementClassName() // HTML COLLECTION 
// 3. document.getElementByTagName() // HTML COLLECTION
// 4. document.querySelector()       // ELEMENT or NULL
// 5. document.querySelectorAll()    // NODELIST

// 1. document.getElementByID()      //ELEMENT or NULL
const fruitlist = document.getElementById("fruitList");
console.log(fruitlist);

// 2. documnet.getElementClassName() // HTML COLLECTION 
const fruits = document.getElementsByClassName("fruits");

setTimeout(() => {fruits[0].style.backgroundColor = "yellow"}, 1000);
setTimeout(() => {fruits[1].style.backgroundColor = "yellow"}, 2000);
setTimeout(() => {fruits[2].style.backgroundColor = "yellow"}, 3000);

// 5. document.querySelectorAll()    // NODELIST
const fruits2 = document.querySelectorAll(".fruits");
setTimeout(() => {fruits[2].style.backgroundColor = "orange"}, 4000);

// 3. document.getElementByTagName() // HTML COLLECTION
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

Array.from(h4Elements).forEach(h4Element => {
   h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
})


// 4. document.querySelector()       // ELEMENT or NULL
const element = document.querySelector(".veg");
setTimeout(() => {element.style.backgroundColor = "yellow"}, 4000);

