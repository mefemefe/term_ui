import { run, commands, commandHistory } from "./commands.js";
import { inputId, outputId, autocomplete } from "./elemIds.js";


window.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById(inputId);
    let output = document.getElementById(outputId);
    let auto = document.getElementById(autocomplete);
    input.focus();
    input.addEventListener('blur', () => {
        input.focus();
    })
    input.addEventListener('keyup', (key) => {
        if (key.key == 'Enter') {
            let command = input.value;
            input.value = '';
            auto.innerText = '';
            if (command) {
                run(command, output);
            }
        } else if (key.key == 'ArrowUp') {
            input.value = commandHistory.prev();
        } else if (key.key == 'ArrowDown') {
            input.value = commandHistory.next();
        } else {
            const currentInput = input.value;
            const matchingCommands = Array.from(commands.keys()).filter(cmd => cmd.startsWith(currentInput));
            if (currentInput && matchingCommands.length == 1 && key.key == 'ArrowRight') {
                input.value = matchingCommands[0];
            }
            if (currentInput && matchingCommands.length > 0) {
                    auto.innerText = matchingCommands.join(' | ');
            } else {
                auto.innerText = '';
            }
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
