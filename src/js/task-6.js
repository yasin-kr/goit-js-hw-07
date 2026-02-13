"use strict";
const inp = document.querySelector("#controls input");
const dataCreate = document.querySelector("button[data-create]");
const dataDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  const arr = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    arr.push(div);
    size += 10;
  }
  boxes.append(...arr);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

dataCreate.addEventListener("click", () => {
  const value = Number(inp.value);
  if (value >= 1 && value <= 100) {
    destroyBoxes();
    createBoxes(value);
    inp.value = "";
  }
});

dataDestroy.addEventListener("click", () => {
  destroyBoxes();
  inp.value = "";
});
