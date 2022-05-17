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

const dataStructures = document.querySelector(".data-structures");
const nodeContainer = document.querySelector(".node-container");
const stackContainer = document.querySelector(".stack-container");
const alert = document.querySelector(".alert");
const inputValue = document.getElementById("value");
const inputIndex = document.getElementById("index");
const dsTitle = document.querySelector(".data-structure-title");

export default function DLL_events() {
  dsTitle.textContent = "Doubly Linked List";
  dataStructures.innerHTML = "";
  stackContainer.innerHTML = "";
  nodeContainer.innerHTML = "";

  DLL_getNodes();

  const push = document.getElementById("dll-push");
  push.addEventListener("click", () => {
    DLL_pushNode(Number(inputValue.value));
    nodeContainer.innerHTML = "";
    alert.innerText = `${Number(inputValue.value)} added to the tail!`;
    alert.style.right = "2rem";
    inputValue.value = "";
    inputIndex.value = "";
    setTimeout(() => {
      alert.style.right = "-500px";
    }, 3000);
    DLL_getNodes();
  });

  const pop = document.getElementById("dll-pop");
  pop.addEventListener("click", () => {
    DLL_popNode();
    nodeContainer.innerHTML = "";
    alert.innerText = "Tail removed!";
    alert.style.right = "2rem";
    inputValue.value = "";
    inputIndex.value = "";
    setTimeout(() => {
      alert.style.right = "-500px";
    }, 3000);
    DLL_getNodes();
  });

  const shift = document.getElementById("dll-shift");
  shift.addEventListener("click", () => {
    DLL_shiftNode();
    nodeContainer.innerHTML = "";
    alert.innerText = "Head removed!";
    alert.style.right = "2rem";
    inputValue.value = "";
    inputIndex.value = "";
    setTimeout(() => {
      alert.style.right = "-500px";
    }, 3000);
    DLL_getNodes();
  });

  const unshift = document.getElementById("dll-unshift");
  unshift.addEventListener("click", () => {
    DLL_unshiftNode(Number(inputValue.value));
    nodeContainer.innerHTML = "";
    alert.innerText = `${Number(inputValue.value)} added to the head!`;
    alert.style.right = "2rem";
    inputValue.value = "";
    inputIndex.value = "";
    setTimeout(() => {
      alert.style.right = "-500px";
    }, 3000);
    DLL_getNodes();
  });

  const insert = document.getElementById("dll-insert");
  insert.addEventListener("click", () => {
    DLL_insertNode(Number(inputIndex.value), Number(inputValue.value));
    nodeContainer.innerHTML = "";
    alert.innerText = `${Number(inputValue.value)} added at the index: ${
      inputIndex.value
    }!`;
    alert.style.right = "2rem";
    inputValue.value = "";
    inputIndex.value = "";
    setTimeout(() => {
      alert.style.right = "-500px";
    }, 3000);
    DLL_getNodes();
  });

  const remove = document.getElementById("dll-remove");
  remove.addEventListener("click", () => {
    if (!DLL_removeNode(Number(inputIndex.value))) {
      alert.innerText = `Linked List is empty`;
      alert.style.right = "2rem";
      inputValue.value = "";
      inputIndex.value = "";
      setTimeout(() => {
        alert.style.right = "-500px";
      }, 3000);
    } else {
      nodeContainer.innerHTML = "";
      alert.innerText = `Node removed at the index: ${Number(
        inputIndex.value
      )}!`;
      alert.style.right = "2rem";
      inputValue.value = "";
      inputIndex.value = "";
      setTimeout(() => {
        alert.style.right = "-500px";
      }, 3000);
      DLL_getNodes();
    }
  });

  const get = document.getElementById("dll-get");
  get.addEventListener("click", () => {
    if (!DLL_getNode(Number(inputIndex.value))) {
      alert.innerText = `There is no node at index: ${inputIndex.value}`;
      alert.style.right = "2rem";
      inputValue.value = "";
      inputIndex.value = "";
      setTimeout(() => {
        alert.style.right = "-500px";
      }, 3000);
    } else {
      nodeContainer.innerHTML = "";
      alert.innerText = `Node found at index: ${inputIndex.value}`;
      alert.style.right = "2rem";
      inputValue.value = "";
      inputIndex.value = "";
      setTimeout(() => {
        alert.style.right = "-500px";
      }, 3000);
      DLL_getNodes();
    }
  });
}
