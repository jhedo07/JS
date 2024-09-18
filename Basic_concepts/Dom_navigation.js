// DOM navigation = The process of navigating through the structure of an 
//                  HTML document using Javascript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previouseElementSibling
// .parentElement
//  .children
//                  

// .firstElementChild-------------------------------------

//document.getElementById();
// selects one item on one list
 const element = document.getElementById("fruits");
 const firstChild = element.firstElementChild;
 firstChild.style.backgroundColor = "red";

 //documnet.querySelectorAll();
// selects all the first item on all lists
 const ulElements = document.querySelectorAll("ul");

 ulElements.forEach(ulElement => {
    const firstChild2 = ulElement.firstElementChild;
    setTimeout(() => {
        firstChild2.style.backgroundColor = "yellow";
    }, 2000);
    
 });

 // .lastElementChild -------------------------------------------
// selects the last item on one list
const lastElement = document.getElementById("fruits");
const lastChild = lastElement.lastElementChild;
lastChild.style.backgroundColor = "yellow";

 //documnet.querySelectorAll();
// selects all the first item on all lists

const ulElements2 = document.querySelectorAll("ul");

ulElements2.forEach(ulElement2 => {
    const lastChild2 = ulElement2.lastElementChild;
    setTimeout(() => {
        lastChild2.style.backgroundColor = "lightgreen";
    }, 3000);
});

// .nextElementSibling ---------------------------------------

const nextElement = document.getElementById("apple");
const nextSibling = nextElement.nextElementSibling;
nextSibling.style.backgroundColor = "orange";

// .previouseElementSibling --------------------------------

const prevElement = document.getElementById("potatoes");
const prevSibling = prevElement.previousElementSibling;
prevSibling.style.backgroundColor = "purple";
 

// .parentElement -------------------------------------

const parentelement = document.getElementById("pie");
const parent = parentelement.parentElement;
parent.style.backgroundColor = "green";


//  .children -----------------------------------------

const child = document.getElementById("fruits");
const childrens = child.children;

Array.from(childrens).forEach(children => {
    children.style.backgroundColor = "grey";
});
childrens[1].style.backgroundColor = "orange";