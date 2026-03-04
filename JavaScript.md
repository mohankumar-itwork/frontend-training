# Notes Format

- **Concept**
- **Syntax**
- **Small Example**
- **Important Point**

---

# JavaScript

JavaScript is a programming language used to make ***web pages interactive and dynamic***. It allows developers to add features such as ***form validation, animations, button actions***, real time updates, and user interaction in websites. ***JavaScript works mainly on the client side*** inside the web browser but ***it can also run on the server side using technologies like Node.js***. It is one of the core technologies of web development along with ***HTML and CSS***.

## What is JavaScript ?

JavaScript (JS) is a programming language used to make websites interactive.

It adds behavior to web pages.

### Examples
- Button click actions
- Form validation
- Image sliders
- Dynamic content updates

### Importance
- Without JavaScript - website is **static**
- With JavaScript - Website becomes **dynamic**

## History of JavaScript

- JavaScript was created in 1995
- Developed by Brendan Eich
- Created at Netscape Company 
- Initially named Mocha 
- Later renamed: 
  - Mocha → LiveScript → JavaScript

### Important Point:
- JavaScript is not related to Java language.  
- The name was given only for marketing popularity.

## JavaScript Versions

JavaScript improves every year.

The standard version is called ECMAScript (ES).

| Version       | Year   |	Features                    |
|---------------|--------|------------------------------|
| ES5           | 2009   |	Stable version              |
| ES6 (ES2015)  | 2015   |	let, const, arrow functions |
| ES7           | 2016   |	New operators               |
| ES8           | 2017   |	Async/Await                 |
| ES9+          | 2018+  |	Modern improvements         |

### Important
- Today developers mostly use ES6 and above.

### Example (Modern JS):
```
const name = "Mohan";
console.log(`Hello ${name}`);
```

## How to Run JavaScript
There are 3 main ways:

### Method 1: Inside HTML (Inline JS)
```
<button onclick="alert('Hello')">Click</button>
```

### Method 2: Internal JavaScript

Write JS inside `<script>` tag.

```
<!DOCTYPE html>
<html>
<body>

<script>
  console.log("Hello JavaScript");
</script>

</body>
</html>
```

### Method 3: External JavaScript File (Best Practice)

Create file: **script.js**

```
console.log("Welcome to JS");
```

Connect with HTML:
```
<script src="script.js"></script>
```
- Mostly used in real projects.

### Where JavaScript Runs?

- Browser (Chrome, Edge, Firefox)
- Server using Node.js
- Mobile Apps
- Games
- Web Applications


## 1. createElement()
createElement() is used to create a new HTML element using JavaScript.

### Syntax
```
document.createElement("tagName");
```
### Example
```
var div = document.createElement("div");
div.innerText = "This is a new DIV";
```
### Important point
The element is only created in memory. It will not appear on the webpage until you add it to the DOM.


## 2. appendChild()
appendChild() is used to add a child element inside a parent element at the end.

### Syntax
```
parent.appendChild(child);
```
### Example
```
document.body.appendChild(div);
```
### Important Point
The element will be added as the last child of the parent.


## 3. append()
append() is used to insert elements or text at the end of a parent element.

Syntax
```
parent.append(child)
```
### Example
```
var newPara = document.createElement("p");
newPara.innerText = "New Paragraph";

div.append(newPara);
```

### Important Point
Unlike appendChild(), append() can add multiple elements or text.


## 4. prepend()
prepend() adds an element at the beginning of a parent element.

### Syntax
```
parent.prepend(child)
```
### Example
```
var heading = document.createElement("h2");
heading.innerText = "DOM Example";

div.prepend(heading);
```
### Important Point
The new element becomes the first child of the parent.


## 5. before()
before() inserts an element before a specific element.

### Syntax
```
element.before(newElement)
```
### Example
```
var beforeText = document.createElement("p");
beforeText.innerText = "This is before the div";

div.before(beforeText);
```
### Important Point
The new element appears before the selected element.


## 6. after()
after() inserts an element after a specific element.

### Syntax
```
element.after(newElement)
```
### Example
```
var afterText = document.createElement("p");
afterText.innerText = "This is after the div";

div.after(afterText);
```
### Important Point
The new element appears immediately after the selected element.


## 7. replaceChild()

replaceChild() is used to replace an existing child element with a new element.

### Syntax
```
parent.replaceChild(newChild, oldChild)
```
### Example
```
var newChild = document.createElement("p");
newChild.innerText = "Replaced Paragraph";

container.replaceChild(newChild, oldChild);
```
### Important Point
You must specify parent element + new element + old element.


## 8. removeChild()

removeChild() removes a child element from its parent.

### Syntax
```
parent.removeChild(child)
```
### Example
```
var removePara = document.getElementById("p2");
container.removeChild(removePara);
```
### Important Point
The element is completely removed from the DOM.


## 9. cloneNode()

cloneNode() creates a copy of an element.

### Syntax
```
element.cloneNode(true or false)
```
### Example
```
var cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);
```
### Important Point
- true → copy element with children  
- false → copy only the element


## 10. parentNode
parentNode returns the parent element of a node.

### Syntax
```
element.parentNode
```
### Example
```
console.log(newChild.parentNode);
```
### Important Point
Used to access or modify the parent element.


## 11.  children
children returns all child elements of a parent.

### Syntax
```
element.children
```
### Example
```
console.log(container.children);
```
### Important Point
Returns an HTMLCollection (array-like list).


## 12. siblings

Sibling elements are elements that share the same parent.

### Syntax
```
element.nextElementSibling
element.previousElementSibling
```
### Example
```
console.log(newChild.nextElementSibling);
console.log(newChild.previousElementSibling);
```
### Important Point
- nextElementSibling → next element  
- previousElementSibling → previous element