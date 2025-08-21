"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const Bai1_1 = require("./Bai1");
class Teacher extends Bai1_1.Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`I am ${this.name}, I teach ${this.subject}`);
    }
}
exports.Teacher = Teacher;
