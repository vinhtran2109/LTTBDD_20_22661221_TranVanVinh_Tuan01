export class Animal {
    makeSound(): void {
        console.log("Some animal sound");
    }
}

export class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

export class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}
