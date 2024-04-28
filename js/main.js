import { run, commandHistory } from "./commands.js";
import { inputId, outputId } from "./elemIds.js";


window.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById(inputId);
    let output = document.getElementById(outputId);
    input.focus();
    input.addEventListener('blur', () => {
        input.focus();
    })
    input.addEventListener('keyup', (key) => {
        if (key.key == 'Enter') {
            let command = input.value;
            input.value = '';
            if (command) {
                run(command, output);
            }
        } else if (key.key == 'ArrowUp') {
            input.value = commandHistory.prev();
        } else if (key.key == 'ArrowDown') {
            input.value = commandHistory.next();
        }
    })
})

// TODO: do something with this
window.visualViewport.addEventListener('resize', function() {
    // Check if the visible height has decreased (indicating keyboard open)
    if (window.innerHeight > window.visualViewport.height) {
      // Keyboard is open, add a class to the body
      document.body.classList.add('keyboard-open');
    } else {
      // Keyboard is closed, remove the class
      document.body.classList.remove('keyboard-open');
    }
});