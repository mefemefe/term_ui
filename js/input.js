const commands = {
    "help": "hi",
    "exit": "bye"
}

function run(text, output) {
    let command = commands[text];
    if (command) {
        output.innerText = 'nice';
    } else {
        let message = `Command not recognized, enter '?' to get a list of commands.`;
        output.innerText = message;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('input');
    let output = document.getElementById('output');
    input.focus();
    input.addEventListener('blur', () => {
        input.focus();
    })
    input.addEventListener('keyup', (key) => {
        console.log(key.key);
        if (key.key == 'Enter') {
            let command = input.value;
            input.value = '';
            run(command, output);
        }
    })
})
