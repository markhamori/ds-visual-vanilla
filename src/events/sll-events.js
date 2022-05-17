import {
  SLL_getNodes,
  SLL_pushNode,
  SLL_popNode,
  SLL_shiftNode,
  SLL_unshiftNode,
  SLL_insertNode,
  SLL_removeNode,
  SLL_getNode,
} from "../methods/sll-methods.js";

const nodeContainer = document.querySelector(".node-container");
const stackContainer = document.querySelector(".stack-container");
const alert = document.querySelector(".alert");
const inputValue = document.getElementById("value");
const inputIndex = document.getElementById("index");
const dsTitle = document.querySelector(".data-structure-title");

export default function SLL_events() {
  dsTitle.textContent = "Singly Linked List";
  nodeContainer.innerHTML = "";
  stackContainer.innerHTML = "";
  SLL_getNodes();

  const push = document.getElementById("sll-push");
  push.addEventListener("click", () => {
    SLL_pushNode(Number(inputValue.value));
    nodeContainer.innerHTML = "";
    alert.innerText = `${Number(inputValue.value)} added to the tail!`;
    alert.style.right = "2rem";
    inputValue.value = "";
    inputIndex.value = "";
    setTimeout(() => {
      alert.style.right = "-500px";
    }, 3000);
    SLL_getNodes();
  });

  const pop = document.getElementById("sll-pop");
  pop.addEventListener("click", () => {
    SLL_popNode();
    nodeContainer.innerHTML = "";
    alert.innerText = "Tail removed!";
    alert.style.right = "2rem";
    inputValue.value = "";
    inputIndex.value = "";
    setTimeout(() => {
      alert.style.right = "-500px";
    }, 3000);
    SLL_getNodes();
  });

  const shift = document.getElementById("sll-shift");
  shift.addEventListener("click", () => {
    SLL_shiftNode();
    nodeContainer.innerHTML = "";
    alert.innerText = "Head removed!";
    alert.style.right = "2rem";
    inputValue.value = "";
    inputIndex.value = "";
    setTimeout(() => {
      alert.style.right = "-500px";
    }, 3000);
    SLL_getNodes();
  });

  const unshift = document.getElementById("sll-unshift");
  unshift.addEventListener("click", () => {
    SLL_unshiftNode(Number(inputValue.value));
    nodeContainer.innerHTML = "";
    alert.innerText = `${Number(inputValue.value)} added to the head!`;
    alert.style.right = "2rem";
    inputValue.value = "";
    inputIndex.value = "";
    setTimeout(() => {
      alert.style.right = "-500px";
    }, 3000);
    SLL_getNodes();
  });

  const insert = document.getElementById("sll-insert");
  insert.addEventListener("click", () => {
    SLL_insertNode(Number(inputIndex.value), Number(inputValue.value));
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
    SLL_getNodes();
  });

  const remove = document.getElementById("sll-remove");
  remove.addEventListener("click", () => {
    if (!SLL_removeNode(Number(inputIndex.value))) {
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
      SLL_getNodes();
    }
  });

  const get = document.getElementById("sll-get");
  get.addEventListener("click", () => {
    if (!SLL_getNode(Number(inputIndex.value))) {
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
      SLL_getNodes();
    }
  });
}
