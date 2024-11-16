import { Command } from "./classes/command.js";
import { CommandHistory } from "./classes/commandHistory.js";
import { reloadTag } from "./tag.js";


// CONSTS
export const commandHistory = new CommandHistory();
export const commands = new Map()

// COMMANDS
const exit = new Command('Closes this tab', () => {
    window.close();
    return '';
})

const list = new Command('List possible commands', () => {
    let lines = [];
    // I want this to justify each key to the length of the longest key...
    let max_length = commands.keys().reduce((max, key) => Math.max(max, key.length), 0);
    commands.forEach((value, key) => {
        if (!value.hidden) {
            let _key = key.padEnd(max_length + 1, ' ');
            lines.push(`${_key} >> ${value.description}\n`)
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

const music = new Command('Toggle music on/off', () => {
    let audio = document.querySelector('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    return '';
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

const reloadTagCommand = new Command('Reload banner logo', () => {
    reloadTag();
    return '';
})

// ORDER
commands.set('?', list);
commands.set('cls', clear);
//commands.set('cp', copy);
commands.set('f11', f11);
commands.set('music', music);
commands.set('logo', reloadTagCommand);
commands.set('exit', exit);

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
