"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = exports.Employee = void 0;
class Employee {
    constructor(name) {
        this.name = name;
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    manage() {
        console.log(`${this.name} is managing`);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    code() {
        console.log(`${this.name} is coding`);
    }
}
exports.Developer = Developer;
