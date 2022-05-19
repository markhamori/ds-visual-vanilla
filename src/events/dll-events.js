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

  const dllMethods = document.createElement("div");
  dllMethods.classList.add("dll-methods");
  dataStructures.appendChild(dllMethods);
  const dllButtons = document.createElement("div");
  dllButtons.classList.add("dll-buttons");
  dllMethods.appendChild(dllButtons);

  const dllPush = document.createElement("button");
  dllPush.classList.add("btn-hover");
  dllPush.classList.add("color-2");
  dllPush.setAttribute("id", "dll-push");
  dllPush.innerText = "Push";
  dllButtons.appendChild(dllPush);

  const dllPop = document.createElement("button");
  dllPop.classList.add("btn-hover");
  dllPop.classList.add("color-2");
  dllPop.setAttribute("id", "dll-pop");
  dllPop.innerText = "Pop";
  dllButtons.appendChild(dllPop);

  const dllShift = document.createElement("button");
  dllShift.classList.add("btn-hover");
  dllShift.classList.add("color-2");
  dllShift.setAttribute("id", "dll-shift");
  dllShift.innerText = "Shift";
  dllButtons.appendChild(dllShift);

  const dllUnshift = document.createElement("button");
  dllUnshift.classList.add("btn-hover");
  dllUnshift.classList.add("color-2");
  dllUnshift.setAttribute("id", "dll-unshift");
  dllUnshift.innerText = "Unshift";
  dllButtons.appendChild(dllUnshift);

  const dllInsert = document.createElement("button");
  dllInsert.classList.add("btn-hover");
  dllInsert.classList.add("color-2");
  dllInsert.setAttribute("id", "dll-insert");
  dllInsert.innerText = "Insert";
  dllButtons.appendChild(dllInsert);

  const dllRemove = document.createElement("button");
  dllRemove.classList.add("btn-hover");
  dllRemove.classList.add("color-2");
  dllRemove.setAttribute("id", "dll-remove");
  dllRemove.innerText = "Remove";
  dllButtons.appendChild(dllRemove);

  const dllGet = document.createElement("button");
  dllGet.classList.add("btn-hover");
  dllGet.classList.add("color-2");
  dllGet.setAttribute("id", "dll-get");
  dllGet.innerText = "Get";
  dllButtons.appendChild(dllGet);

  dllPush.addEventListener("click", () => {
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

  dllPop.addEventListener("click", () => {
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

  dllShift.addEventListener("click", () => {
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

  dllUnshift.addEventListener("click", () => {
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

  dllInsert.addEventListener("click", () => {
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

  dllRemove.addEventListener("click", () => {
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

  dllGet.addEventListener("click", () => {
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
