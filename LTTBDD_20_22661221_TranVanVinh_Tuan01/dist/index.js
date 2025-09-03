"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai1_1 = require("./Bai1");
const Bai2_1 = require("./Bai2");
const Bai3_1 = require("./Bai3");
const Bai4_1 = require("./Bai4");
const Bai5_1 = require("./Bai5");
const Bai6_1 = require("./Bai6");
const Bai7_1 = require("./Bai7");
const Bai8_1 = require("./Bai8");
const Bai10_1 = require("./Bai10");
const Bai12_1 = require("./Bai12");
const Bai13_1 = require("./Bai13");
const Bai14_1 = require("./Bai14");
const Bai15_1 = require("./Bai15");
const Bai16_1 = require("./Bai16");
const Bai17_1 = require("./Bai17");
const Bai18_1 = require("./Bai18");
const Bai19_1 = require("./Bai19");
const Bai20_1 = require("./Bai20");
const Bai21_1 = require("./Bai21");
const Bai22_1 = require("./Bai22");
const Bai23_1 = require("./Bai23");
const Bai24_1 = require("./Bai24");
const Bai25_1 = require("./Bai25");
const Bai26_1 = require("./Bai26");
const Bai27_1 = require("./Bai27");
const Bai28_1 = require("./Bai28");
const Bai29_1 = require("./Bai29");
const Bai30_1 = require("./Bai30");
const Bai11_1 = require("./Bai11");
//Bai1
const per1 = new Bai1_1.Person("Vinh", 21);
// console.log(per1)
//Bai2
const std1 = new Bai2_1.Student("Vinh", 21, 10);
// console.log(std1)
//Bai3
const car1 = new Bai3_1.Car("Honda", "SH", 2025);
// console.log(car1)
//Bai4
const rect = new Bai4_1.Rectangle(5, 10);
// console.log(rect)
// console.log(rect.getArea());
// console.log(rect.getPerimeter());
//Bai5
const bankacc = new Bai5_1.BankAccount(20);
bankacc.deposit(1);
// console.log(bankacc.getBalance()); 
// console.log(bankacc.withdraw(2));   
// console.log(bankacc.withdraw(100)); 
//Bai6
const book = new Bai6_1.Book("Tat Den", "Ngo Tat To", 1960);
// console.log(book);
//Bai7
const user = new Bai7_1.User("Vinh");
// console.log(user)
// user.name = "Tran"
// console.log(user)
//Bai8
const products = [
    new Bai8_1.Product("Phone", 500),
    new Bai8_1.Product("Pen", 10),
    new Bai8_1.Product("Laptop", 1000)
];
const filtered = products.filter(p => p.price > 100);
// console.log(filtered);
//Bai9
//Bai10
const account = new Bai10_1.Account("Vinh", "111", 111);
console.log(account);
//Bai11
const dog11 = new Bai11_1.Dog("KiKi");
dog11.bark();
const cat11 = new Bai11_1.Cat("MiMi");
cat11.meow();
//Bai12
const bird = new Bai12_1.Bird();
bird.fly();
const fish = new Bai12_1.Fish();
fish.swim();
//Bai13
const square = new Bai13_1.Square(4);
console.log("Square area:", square.area());
const circle = new Bai13_1.Circle(3);
console.log("Circle area:", circle.area());
//Bai14
const manager = new Bai14_1.Manager("Nam");
manager.manage();
const dev = new Bai14_1.Developer("Vinh");
dev.code();
//Bai15
const library = new Bai15_1.Library();
library.addBook(new Bai6_1.Book("Doraemon", "Fujiko", 1990));
console.log(library.books);
//Bai16
const numberBox = new Bai16_1.Box(123);
const stringBox = new Bai16_1.Box("Hello");
console.log(numberBox.value, stringBox.value);
//Bai17
const logger = Bai17_1.Logger.getInstance();
logger.log("Hello Logger");
//Bai18
console.log(Bai18_1.MathUtil.add(1, 2), Bai18_1.MathUtil.subtract(5, 3), Bai18_1.MathUtil.multiply(2, 3), Bai18_1.MathUtil.divide(10, 2));
//Bai19
const animals = [new Bai19_1.Dog(), new Bai19_1.Cat(), new Bai19_1.Animal()];
animals.forEach(a => a.makeSound());
//Bai20
const car20 = new Bai20_1.Car();
const bike = new Bai20_1.Bike();
car20.drive();
bike.drive();
//Bai21
const repo = new Bai21_1.Repository();
repo.add(1);
repo.add(2);
console.log(repo.getAll());
//Bai22
const stack = new Bai22_1.Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
//Bai23
const cash = new Bai23_1.CashPayment();
cash.pay(100);
const card = new Bai23_1.CardPayment();
card.pay(200);
//Bai24
const fan = new Bai24_1.Fan();
fan.turnOn();
const ac = new Bai24_1.AirConditioner();
ac.turnOn();
//Bai25
Bai25_1.Shape.describe();
//Bai26
const order = new Bai26_1.Order();
order.addProduct(new Bai8_1.Product("Book", 50));
order.addProduct(new Bai8_1.Product("Pen", 10));
console.log(order.totalPrice());
//Bai27
const teacher = new Bai27_1.Teacher("An", 35, "Math");
teacher.introduce();
//Bai28
const dog28 = new Bai28_1.Dog();
dog28.sound();
const cat28 = new Bai28_1.Cat();
cat28.sound();
//Bai29
const car29 = new Bai29_1.Car();
const robot = new Bai29_1.Robot();
car29.move();
robot.move();
//Bai30
const school = new Bai30_1.School();
school.students.push(new Bai2_1.Student("Nam", 18, 10));
school.teachers.push(teacher);
school.displayInfo();
