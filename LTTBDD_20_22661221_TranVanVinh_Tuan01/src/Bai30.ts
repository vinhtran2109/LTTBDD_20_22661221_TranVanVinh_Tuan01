import { Student } from "./Bai2";
import { Teacher } from "./Bai27";

export class School {
    students: Student[] = [];
    teachers: Teacher[] = [];
    displayInfo(): void {
        console.log("Students:", this.students);
        console.log("Teachers:", this.teachers);
    }
}
