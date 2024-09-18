// DOM = Documnet Object Model
//          Object{} that represents the page that you see in the web browser
//          and provides you with an API to interact with it .
//          Web browser constructs the DOM when it loads an HTML document,
//          and structure all the elements in a tree-like representation.
//          Javascript can access the DOM dynamically 
//          change the content, structure, and style of a web page

// Document
//  - Root element: <html>
//      - Element: <head>
//          - Element: <title>
//              - Text: "My Title"
//      - Element: <body>
//          - Element: <h1>
//              - Text: "A heading"
//          - Element: <a> - Attribute: href
//              - Text: "Link text"

// document.title = "My Website";
// document.body.style.background = "hsl(0, 0%, 15%)";

const username =  "Jackson";
const welcomemsg = document.getElementById("welcome-msg");

welcomemsg.textContent += username === "" ? `Guest` : username;

console.dir(document);