import "./css/styles.css";
import {
  SLL_getNodes,
  SLL_pushNode,
  SLL_popNode,
  SLL_shiftNode,
  SLL_unshiftNode,
  SLL_insertNode,
  SLL_removeNode,
  SLL_findNode,
} from "./methods/sll.js";

const sll = true;
const dsMethods = document.querySelector(".data-structure-methods");

const sphereOne = document.querySelector(".sphere-1");

let randomNum = Math.random() * 6 + 1;

const logKey = (e) => {
  sphereOne.style.bottom = `${Math.floor((e.clientY / 100) * randomNum)}px`;
  sphereOne.style.left = `${Math.floor((e.clientX / 100) * randomNum)}px`;
  sphereOne.style.filter = `blur(${e.clientX / 500}px)`;
};

document.addEventListener("mousemove", logKey);

if (sll == true) {
  SLL_getNodes();
}
