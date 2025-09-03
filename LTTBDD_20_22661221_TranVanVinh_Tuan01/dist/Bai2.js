"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Bai1_1 = require("./Bai1");
class Student extends Bai1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}
exports.Student = Student;
