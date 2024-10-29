// Selecting elements
let header = document.getElementById("header");
let paragraphs = document.getElementsByClassName("description");
let listItems = document.getElementsByTagName("li");
let firstItem = document.querySelector("#itemList li");
let allItems = document.querySelectorAll("#itemList li");

console.log(header); // <h1 id="header">Welcome to My Webpage</h1>
console.log(paragraphs); // HTMLCollection of <p class="description"> elements
console.log(listItems); // HTMLCollection of <li> elements
console.log(firstItem); // <li>Item 1</li>
console.log(allItems); // NodeList of <li> elements
// Changing content
header.innerHTML = "Hello, World!";
paragraphs[0].textContent = "This is an updated paragraph.";
firstItem.innerText = "Updated Item 1";

// Modifying styles
header.style.color = "blue";
header.style.fontSize = "2em";
header.style.textAlign = "center";

paragraphs[0].style.backgroundColor = "lightgray";

// Creating a new element
let newItem = document.createElement("li");
newItem.textContent = "New Item";

// Adding the new element to the list
let itemList = document.getElementById("itemList");
itemList.appendChild(newItem);

// Removing an element
let firstItem = itemList.firstElementChild;
itemList.removeChild(firstItem);

// Adding an event listener
let button = document.getElementById("changeButton");
button.addEventListener("click", function ("1") {
  header.textContent = "Content Changed!";
  itemList.innerHTML += "<li>Another New Item</li>";
});
