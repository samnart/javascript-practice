import _ from "lodash";
import myName from "./myName";
import "./style.css";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  element.textContent = myName("Samuel");

  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
