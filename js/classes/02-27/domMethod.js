
// createElement()
var div = document.createElement("div");
div.innerText = "This is a new DIV";

// appendChild()
document.body.appendChild(div);

// create paragraph
var newPara = document.createElement("p");
newPara.innerText = "New Paragraph";

// append()
div.append(newPara);

// prepend()
var heading = document.createElement("h2");
heading.innerText = "DOM Example";
div.prepend(heading);

// before()
var beforeText = document.createElement("p");
beforeText.innerText = "This is before the div";
div.before(beforeText);

// after()
var afterText = document.createElement("p");
afterText.innerText = "This is after the div";
div.after(afterText);

// replaceChild()
var container = document.getElementById("container");
var oldChild = document.getElementById("p1");

var newChild = document.createElement("p");
newChild.innerText = "Replaced Paragraph";

container.replaceChild(newChild, oldChild);

// removeChild()
var removePara = document.getElementById("p2");
container.removeChild(removePara);

// cloneNode()
var cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);

// parentNode
console.log(newChild.parentNode);

// children
console.log(container.children);

// siblings
console.log(newChild.nextElementSibling);
console.log(newChild.previousElementSibling);