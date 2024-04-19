class Command {
    constructor(description, run) {
        this.description = description;
        this.run = run;
    }
}

const exit = new Command('Closes this tab', () => {
    window.close();
})

const commands = {
    "exit": exit
}

export function run(text, output) {
    let command = commands[text];
    if (command) {
        command.run();
    } else {
        let message = `Command not recognized, enter '?' to get a list of commands.`;
        output.innerText = message;
    }
}
