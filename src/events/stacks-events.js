import {
  STACKS_pushNode,
  STACKS_popNode,
  STACKS_findNode,
  STACKS_getNodes,
} from "../methods/stacks-methods.js";

const nodeContainer = document.querySelector(".node-container");
const dsTitle = document.querySelector(".data-structure-title");
const alert = document.querySelector(".alert");
const inputValue = document.getElementById("value");
const inputIndex = document.getElementById("index");

export default function STACKS_events() {
  nodeContainer.innerHTML = "";
  dsTitle.textContent = "Stacks";
  STACKS_getNodes();
}
