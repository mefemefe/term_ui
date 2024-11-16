import { tag } from "./elemIds.js"

let last = null;
const length = 7;

export function reloadTag(){
    let div = document.getElementById(tag);
    let index = Math.round(Math.random() * length);
    while (index == last) {
        index = Math.round(Math.random() * length);
    }
    last = index
    fetch(`etc/${index}.txt`)
      .then(response => response.text())
      .then(data => {
        div.innerText = data;
      })
      .catch(error => console.error('Error loading ASCII art:', error));
}

window.addEventListener('DOMContentLoaded', reloadTag)
