import { run } from "./command.js";


document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('input');
    let output = document.getElementById('output');
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
        }
    })
})
