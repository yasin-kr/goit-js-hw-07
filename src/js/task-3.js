"use strict";

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  if (value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = value;
  }
});
