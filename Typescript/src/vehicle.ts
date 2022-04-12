export interface Vehicle{

    name: string;
    speed: number;
    gears: number;

    applyBrakes(value: number): void;
}

export class Car implements Vehicle{

    name: string;
    speed: number;
    gears: number;

    // constructor declarations (multiple)
    constructor();
    constructor(name: string, speed: number, gears: number);

    // constructor implementation (only one)
    constructor(name?: string, speed?: number, gears?: number){
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }

   

    applyBrakes(value: number): void {
        this.speed -= value;
    }
}