class Command {
    constructor(description, run, hidden=false) {
        this.description = description;
        this.run = run;
        this.hidden = hidden;
    }
}

const commands = new Map()

const exit = new Command('Closes this tab', () => {
    window.close();
})

const list = new Command('List possible commands', () => {
    let lines = [];
    commands.forEach((value, key) => {
        if (!value.hidden) {
            lines.push(`${key}: ${value.description}\n`)
        }
    })
    return lines.join('\n');
}, true)

const clear = new Command('Clear output', () => {
    return '';
})

const copy = new Command('Copies the current output', () => {
    let output = document.getElementById('output');
    if (output.innerText) {
        navigator.clipboard.writeText(output.innerText);
        return 'Output copied to clipboard.';
    } else {
        return 'Output was empty so nothing was copied.'
    }
})

commands.set('?', list);
commands.set('cls', clear);
commands.set('cp', copy);
commands.set('exit', exit);

export function run(text, output) {
    let command = commands.get(text);
    if (command) {
        output.innerText = command.run();
    } else {
        output.innerText = `Command "${text}" not recognized, enter "?" to get a list of commands.`;
    }
}
