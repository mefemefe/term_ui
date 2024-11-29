import { tag } from "./elemIds.js"

const length = 6;
let last = Math.round(Math.random() * (length - 1));

export function reloadTag(){
    let div = document.getElementById(tag);
    fetch(`etc/${last}.txt`)
    .then(response => response.text())
    .then(data => {
      div.innerText = data;
    })
    .catch(error => console.error('Error loading ASCII art:', error));
    last = (last + 1) % length;
}

window.addEventListener('DOMContentLoaded', reloadTag)
