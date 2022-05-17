import Stacks from "../structures/Stacks";

const stacks = new Stacks();
stacks.push(5);
stacks.push(10);
stacks.push(20);
stacks.push(8);
stacks.push(30);

const dsTitle = document.querySelector(".data-structure-title");
const nodeContainer = document.querySelector(".node-container");

dsTitle.textContent = "Stacks";

export function STACKS_pushNode(val) {
  return stacks.push(val);
}

export function STACKS_popNode() {
  return stacks.pop();
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
