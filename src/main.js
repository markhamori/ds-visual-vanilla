import "./css/styles.css";
import { SLL_getNodes, SLL_addNode } from "./methods/sll.js";

const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const color3 = document.querySelector(".color-3");
const color4 = document.querySelector(".color-4");
const color5 = document.querySelector(".color-5");
const color6 = document.querySelector(".color-6");
const color7 = document.querySelector(".color-7");
const color8 = document.querySelector(".color-8");
const color9 = document.querySelector(".color-9");
const color10 = document.querySelector(".color-10");
const color11 = document.querySelector(".color-11");
const nodes = document.querySelectorAll(".nodes");

const sll = true;

if (sll == true) {
  SLL_getNodes();
}
