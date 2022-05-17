import "./css/styles.css";

import SLL_events from "./events/sll-events.js";
import DLL_events from "./events/dll-events.js";
import STACKS_events from "./events/stacks-events.js";

const sphereOne = document.querySelector(".sphere-1");
const sllBtn = document.getElementById("sll");
const dllBtn = document.getElementById("dll");
const stacksBtn = document.getElementById("stacks");
const dsTitle = document.querySelector(".data-structure-title");

let randomNum = Math.random() * 6 + 1;
dsTitle.textContent = "Select a structure";

sllBtn.addEventListener("click", () => {
  SLL_events();
});

dllBtn.addEventListener("click", () => {
  DLL_events();
});

stacksBtn.addEventListener("click", () => {
  STACKS_events();
});

const logKey = (e) => {
  sphereOne.style.bottom = `${Math.floor((e.clientY / 100) * randomNum)}px`;
  sphereOne.style.left = `${Math.floor((e.clientX / 100) * randomNum)}px`;
  sphereOne.style.filter = `blur(${e.clientX / 500}px)`;
};

document.addEventListener("mousemove", logKey);
