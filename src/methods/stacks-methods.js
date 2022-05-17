import Stacks from "../structures/Stacks";

const stacks = new Stacks();
stacks.push(5);
stacks.push(10);
stacks.push(20);
stacks.push(8);
stacks.push(30);

const stackContainer = document.querySelector(".stack-container");

export function STACKS_pushNode(val) {
  return stacks.push(val);
}

export function STACKS_popNode() {
  return stacks.pop();
}

export function STACKS_findNode() {
  return stacks.findAll();
}

export function STACKS_getNodes() {
  for (const node of stacks.findAll()) {
    const div = document.createElement("div");
    div.classList.add("stacks");
    div.classList.add(`node`);

    if (stacks.findAll()[0].val === node.val) {
      div.innerText = `${node.val} \n First`;
    } else if (stacks.findAll()[stacks.findAll().length - 1].val === node.val) {
      div.innerText = `${node.val} \n Last`;
    } else {
      div.innerText = `${node.val} `;
    }

    stackContainer.append(div);
  }
}
