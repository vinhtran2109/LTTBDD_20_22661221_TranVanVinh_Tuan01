"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    displayInfo() {
        console.log("Students:", this.students);
        console.log("Teachers:", this.teachers);
    }
}
exports.School = School;
