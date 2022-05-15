import "./css/styles.css";
import {
  SLL_getNodes,
  SLL_pushNode,
  SLL_popNode,
  SLL_shiftNode,
  SLL_unshiftNode,
} from "./methods/sll.js";

const sll = true;
const methods = document.querySelector(".methods");

if (sll == true) {
  SLL_getNodes();

  const pushBtn = document.createElement("button");
  const pushInput = document.createElement("input");
  const pushLabel = document.createElement("label");

  pushBtn.innerText = "Push";
  pushInput.classList.add("balloon");
  pushInput.id = "galaxy";
  pushLabel.setAttribute("for", pushInput.id);
  pushLabel.htmlFor = "galaxy";
  pushLabel.innerHTML = "Push";

  methods.appendChild(pushBtn);
  methods.appendChild(pushInput);
}
