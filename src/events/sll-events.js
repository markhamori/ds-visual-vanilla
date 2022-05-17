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

const dataStructures = document.querySelector(".data-structures");
const nodeContainer = document.querySelector(".node-container");
const stackContainer = document.querySelector(".stack-container");
const alert = document.querySelector(".alert");
const inputValue = document.getElementById("value");
const inputIndex = document.getElementById("index");
const dsTitle = document.querySelector(".data-structure-title");

export default function SLL_events() {
  dsTitle.textContent = "Singly Linked List";
  dataStructures.innerHTML = "";
  nodeContainer.innerHTML = "";
  stackContainer.innerHTML = "";
  SLL_getNodes();

  const sllMethods = document.createElement("div");
  sllMethods.classList.add("sll-methods");
  dataStructures.appendChild(sllMethods);
  const sllButtons = document.createElement("div");
  sllButtons.classList.add("sll-buttons");
  sllMethods.appendChild(sllButtons);

  const sllPush = document.createElement("button");
  sllPush.classList.add("btn-hover");
  sllPush.classList.add("color-1");
  sllPush.setAttribute("id", "sll-push");
  sllPush.innerText = "Push";
  sllButtons.appendChild(sllPush);

  const sllPop = document.createElement("button");
  sllPop.classList.add("btn-hover");
  sllPop.classList.add("color-1");
  sllPop.setAttribute("id", "sll-pop");
  sllPop.innerText = "Pop";
  sllButtons.appendChild(sllPop);

  const sllShift = document.createElement("button");
  sllShift.classList.add("btn-hover");
  sllShift.classList.add("color-1");
  sllShift.setAttribute("id", "sll-shift");
  sllShift.innerText = "Shift";
  sllButtons.appendChild(sllShift);

  const sllUnshift = document.createElement("button");
  sllUnshift.classList.add("btn-hover");
  sllUnshift.classList.add("color-1");
  sllUnshift.setAttribute("id", "sll-unshift");
  sllUnshift.innerText = "Unshift";
  sllButtons.appendChild(sllUnshift);

  const sllInsert = document.createElement("button");
  sllInsert.classList.add("btn-hover");
  sllInsert.classList.add("color-1");
  sllInsert.setAttribute("id", "sll-insert");
  sllInsert.innerText = "Insert";
  sllButtons.appendChild(sllInsert);

  const sllRemove = document.createElement("button");
  sllRemove.classList.add("btn-hover");
  sllRemove.classList.add("color-1");
  sllRemove.setAttribute("id", "sll-remove");
  sllRemove.innerText = "Remove";
  sllButtons.appendChild(sllRemove);

  const sllGet = document.createElement("button");
  sllGet.classList.add("btn-hover");
  sllGet.classList.add("color-1");
  sllGet.setAttribute("id", "sll-get");
  sllGet.innerText = "Get";
  sllButtons.appendChild(sllGet);

  sllPush.addEventListener("click", () => {
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

  sllPop.addEventListener("click", () => {
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

  sllShift.addEventListener("click", () => {
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

  sllUnshift.addEventListener("click", () => {
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

  sllInsert.addEventListener("click", () => {
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

  sllRemove.addEventListener("click", () => {
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

  sllGet.addEventListener("click", () => {
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
