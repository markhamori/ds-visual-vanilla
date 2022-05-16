import DoublyLinkedList from "../structures/DoublyLinkedList";

const dll = new DoublyLinkedList();
dll.push(5);
dll.push(10);
dll.push(20);
dll.push(8);
dll.push(30);

const dsTitle = document.querySelector(".data-structure-title");
const nodeContainer = document.querySelector(".node-container");

dsTitle.textContent = "Doubly Linked List";

export function DLL_pushNode(val) {
  return dll.push(val);
}

export function DLL_popNode() {
  return dll.pop();
}

export function DLL_getNode(index) {
  return dll.get(index);
}

export function DLL_shiftNode() {
  return dll.shift();
}

export function DLL_unshiftNode(val) {
  return dll.unshift(val);
}

export function DLL_insertNode(index, val) {
  return dll.insert(index, val);
}

export function DLL_removeNode(index) {
  return dll.remove(index);
}

export function DLL_getNodes() {
  for (const node of dll.findAll()) {
    const div = document.createElement("div");
    div.classList.add("nodes");
    div.classList.add(`node-${node.val}`);

    if (dll.findAll()[0].val === node.val) {
      div.innerText = `${node.val} \n Head \n Next: ${node.next.val}`;
    } else if (dll.findAll()[dll.findAll().length - 1].val === node.val) {
      div.innerText = `${node.val} \n Tail \n Next: ${null}`;
    } else {
      div.innerText = `${node.val} \n Next: ${node.next.val}`;
    }
    const arrow = document.createElement("div");
    arrow.classList.add("single-arrow");

    nodeContainer.append(div);
    if (node.next != null) nodeContainer.append(arrow);
  }
}
