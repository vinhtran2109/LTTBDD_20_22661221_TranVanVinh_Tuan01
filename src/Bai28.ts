export class Animal {
    protected makeSound(): void {
        console.log("Some animal sound");
    }
    public sound(): void {
        this.makeSound();
    }
}

export class Dog extends Animal {
    protected makeSound(): void {
        console.log("Woof!");
    }
}

export class Cat extends Animal {
    protected makeSound(): void {
        console.log("Meow!");
    }
}
