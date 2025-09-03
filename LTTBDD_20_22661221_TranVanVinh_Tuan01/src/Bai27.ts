import { Person } from "./Bai1";

export class Teacher extends Person {
    subject: string;
    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }
    introduce(): void {
        console.log(`I am ${this.name}, I teach ${this.subject}`);
    }
}
