export class Level {
    public value: number;
    public active: boolean;

    constructor(
        value: number,
        active: boolean
    ) {
        this.value = value;
        this.active = active;
    }
}