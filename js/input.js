import { run, previousCommand } from "./command.js";
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
            if (previousCommand) {
                input.value = previousCommand;
            }
        }
    })
})
