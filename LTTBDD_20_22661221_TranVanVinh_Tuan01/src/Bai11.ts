export class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export class Dog extends Animal {
    bark(): void {
        console.log("Woof!");
    }
}

export class Cat extends Animal {
    meow(): void {
        console.log("Meow!");
    }
}
