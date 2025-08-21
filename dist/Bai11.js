"use strict";
class AnimalBase {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends AnimalBase {
    bark() {
        console.log("Woof!");
    }
}
class Cat extends AnimalBase {
    meow() {
        console.log("Meow!");
    }
}
