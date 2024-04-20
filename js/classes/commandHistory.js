export class CommandHistory {
    constructor() {
        this.commands = [];
        this.max_length = 10;
        this.current = 0;
    }
    push(command) {
        if (this.commands.length == this.max_length) {
            this.commands = this.commands.slice(1);
        }
        this.commands.push(command);
        this.current = this.commands.length;
    }
    curr() {
        return this.commands[this.current];
    }
    prev() {
        if (this.current > 0){
            this.current--;
        }
        return this.curr();
    }
    next() {
        if (this.current < this.commands.length - 1) {
            this.current++;
        } else {
            this.current = this.commands.length;
            return '';
        }
        return this.curr();
    }
}
