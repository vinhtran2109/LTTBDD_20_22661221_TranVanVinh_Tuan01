export interface Vehicle {
    drive(): void;
}

export class Car implements Vehicle {
    drive(): void {
        console.log("Car is driving");
    }
}

export class Bike implements Vehicle {
    drive(): void {
        console.log("Bike is driving");
    }
}
