import { Command } from "./classes/command.js";
import { CommandHistory } from "./classes/commandHistory.js";

// CONSTS
export const commandHistory = new CommandHistory();
const commands = new Map()

// COMMANDS
const list = new Command('List possible commands', () => {
    let lines = [];
    commands.forEach((value, key) => {
        if (!value.hidden) {
            lines.push(`${key} >> ${value.description}\n`)
        }
    })
    return lines.join('\n') + '\n';
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

const f11 = new Command('Sets fullscreen', () => {
    const element = document.documentElement; // Fullscreen the whole document
    
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
    }
    return '';
})

// ORDER
commands.set('?', list);
commands.set('cls', clear);
commands.set('cp', copy);
commands.set('f11', f11)

// RUN
export function run(text, output) {
    let command = commands.get(text);
    if (command) {
        output.innerText = command.run();
    } else {
        output.innerText = `Command "${text}" not recognized, enter "?" to get a list of commands.`;
    }
    commandHistory.push(text);
}
