import {
  DLL_getNodes,
  DLL_pushNode,
  DLL_popNode,
  DLL_shiftNode,
  DLL_unshiftNode,
  DLL_insertNode,
  DLL_removeNode,
  DLL_getNode,
} from "../methods/dll-methods.js";

const nodeContainer = document.querySelector(".node-container");
const stackContainer = document.querySelector(".stack-container");
const alert = document.querySelector(".alert");
const inputValue = document.getElementById("value");
const inputIndex = document.getElementById("index");
const dsTitle = document.querySelector(".data-structure-title");

export default function DLL_events() {
  stackContainer.innerHTML = "";
  nodeContainer.innerHTML = "";

  DLL_getNodes();
}
