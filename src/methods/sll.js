import SinglyLinkedList from "../structures/SinglyLinkedList";

const sll = new SinglyLinkedList();
sll.push(5);
sll.push(10);
sll.push(20);
sll.push(8);
sll.push(30);

const dsTitle = document.querySelector(".data-structure-title");
const nodeContainer = document.querySelector(".node-container");

dsTitle.textContent = "Singly Linked List";

export function SLL_pushNode(val) {
  sll.push(val);
}

export function SLL_popNode() {
  sll.pop();
}

export function SLL_shiftNode() {
  sll.shift();
}

export function SLL_unshiftNode(val) {
  sll.unshift(val);
}

export function SLL_insertNode(index, val) {
  sll.insert(index, val);
}

export function SLL_removeNode(index) {
  sll.remove(index);
}

export function SLL_findNode(val) {
  sll.findOne(val);
}

export function SLL_getNodes() {
  for (const node of sll.findAll()) {
    const div = document.createElement("div");
    div.classList.add("nodes");
    div.classList.add(`node-${node.val}`);

    if (sll.findAll()[0].val === node.val) {
      div.innerText = `${node.val} \n Head \n Next: ${node.next.val}`;
    } else if (sll.findAll()[sll.findAll().length - 1].val === node.val) {
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
