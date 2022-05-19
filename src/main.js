import "./css/styles.css";

import SLL_events from "./events/sll-events.js";
import DLL_events from "./events/dll-events.js";
import STACKS_events from "./events/stacks-events.js";

const sphereOne = document.querySelector(".sphere-1");
const sllBtn = document.getElementById("sll");
const dllBtn = document.getElementById("dll");
const stacksBtn = document.getElementById("stacks");
const dsTitle = document.querySelector(".data-structure-title");
const openBtn = document.querySelector(".nav__open");
const openBtnImg = document.querySelector(".nav__open").children[0];
const navigation = document.getElementsByTagName("nav")[0];

let randomNum = Math.random() * 6 + 1;
let open = false;
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

openBtn.addEventListener("click", () => {
  open = !open;
  if (open) {
    openBtnImg.src = "./src/assets/circle-chevron-right-solid.svg";
    navigation.style.right = 0;
  } else {
    openBtnImg.src = "./src/assets/circle-chevron-left-solid.svg";
    navigation.style.right = "-360px";
  }
});

const logKey = (e) => {
  sphereOne.style.bottom = `${Math.floor((e.clientY / 100) * randomNum)}px`;
  sphereOne.style.left = `${Math.floor((e.clientX / 100) * randomNum)}px`;
  sphereOne.style.filter = `blur(${e.clientX / 500}px)`;
};

document.addEventListener("mousemove", logKey);
