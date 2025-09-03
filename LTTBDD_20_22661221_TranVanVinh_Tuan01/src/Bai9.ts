export interface Animal {
    name: string;
    sound(): void;
}

export class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sound(): void {
        console.log("Woof!");
    }
}

export class Cat implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sound(): void {
        console.log("Meow!");
    }
}