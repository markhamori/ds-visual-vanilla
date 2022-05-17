import "./css/styles.css";
import {
  SLL_getNodes,
  SLL_pushNode,
  SLL_popNode,
  SLL_shiftNode,
  SLL_unshiftNode,
  SLL_insertNode,
  SLL_removeNode,
  SLL_getNode,
} from "./methods/sll.js";

import { STACKS_pushNode, STACKS_popNode } from "./methods/stacks.js";

const sphereOne = document.querySelector(".sphere-1");
const nodeContainer = document.querySelector(".node-container");
const alert = document.querySelector(".alert");
const inputValue = document.getElementById("value");
const inputIndex = document.getElementById("index");
const sllBtn = document.getElementById("sll");

let sll = true;
let randomNum = Math.random() * 6 + 1;

const logKey = (e) => {
  sphereOne.style.bottom = `${Math.floor((e.clientY / 100) * randomNum)}px`;
  sphereOne.style.left = `${Math.floor((e.clientX / 100) * randomNum)}px`;
  sphereOne.style.filter = `blur(${e.clientX / 500}px)`;
};

document.addEventListener("mousemove", logKey);
sllBtn.addEventListener("click", () => {
  nodeContainer.innerHTML = "";
  SLL_getNodes();
});

if (sll == true) {
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

console.log(STACKS_pushNode(50));
