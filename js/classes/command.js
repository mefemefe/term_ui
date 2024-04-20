export class Command {
    constructor(description, run, hidden=false) {
        this.description = description;
        this.run = run;
        this.hidden = hidden;
    }
}
