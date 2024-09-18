/* How to accept User Input
    - window.prompt
    - HTML textbox
*/

// HTML textbox
let name;
document.getElementById("mySubmit").onclick = function(){
    name = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${name}`;
}

// window.prompt
// let name;
// name = window.prompt("Enter name");
// console.log(name);