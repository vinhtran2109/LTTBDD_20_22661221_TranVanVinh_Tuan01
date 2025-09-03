import { Person } from "./Bai1";
export class Student extends Person {
    grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age); 
        this.grade = grade;
    }
}