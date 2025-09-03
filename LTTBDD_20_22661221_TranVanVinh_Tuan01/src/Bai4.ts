export class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height:number){
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}