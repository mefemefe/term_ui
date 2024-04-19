class Command {
    constructor(description, run) {
        this.description = description;
        this.run = run;
    }
}

const commands = new Map()

const exit = new Command('Closes this tab', () => {
    window.close();
})

const list = new Command('List possible commands', () => {
    let lines = [];
    commands.forEach((value, key) => {
        lines.push(`${key}: ${value.description}\n`)
    })
    return lines.join('\n');
})

const clear = new Command('Clear output', () => {
    return '';
})

commands.set('?', list);
commands.set('clear', clear);
commands.set('exit', exit);

export function run(text, output) {
    let command = commands.get(text);
    if (command) {
        output.innerText = command.run();
    } else {
        let message = `Command not recognized, enter '?' to get a list of commands.`;
        output.innerText = message;
    }
}
