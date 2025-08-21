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
