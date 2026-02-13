"use strict";
const categories = document.querySelector("#categories");
const categoriesLength = categories.children.length;

//1
console.log("Number of categories: " + categoriesLength);

//2
const lists = categories.querySelectorAll(".item");
for (const list of lists) {
  console.log(`Category: ${list.firstElementChild.textContent}`);
  console.log(`Elements: ${list.lastElementChild.children.length}`);
}
