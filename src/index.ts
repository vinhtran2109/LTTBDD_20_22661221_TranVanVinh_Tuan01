import { Person } from "./Bai1";
import { Student } from "./Bai2";
import { Car } from "./Bai3";
import { Rectangle } from "./Bai4";
import { BankAccount } from "./Bai5";
import { Book } from "./Bai6";
import { User } from "./Bai7";
import { Product } from "./Bai8";
import { Account } from "./Bai10";

//Bai1
const per1 = new Person("Vinh", 21);
// console.log(per1)

//Bai2
const std1 = new Student("Vinh",21, 10);
// console.log(std1)

//Bai3
const car1 = new Car("Honda","SH",2025);
// console.log(car1)

//Bai4
const rect = new Rectangle(5,10);
// console.log(rect)
// console.log(rect.getArea());
// console.log(rect.getPerimeter());

//Bai5
const bankacc = new BankAccount(20);
bankacc.deposit(1)
// console.log(bankacc.getBalance()); 
// console.log(bankacc.withdraw(2));   
// console.log(bankacc.withdraw(100)); 

//Bai6
const book = new Book("Tat Den","Ngo Tat To", 1960)
// console.log(book);

//Bai7
const user = new User("Vinh")
// console.log(user)
// user.name = "Tran"
// console.log(user)

//Bai8

const products = [
    new Product("Phone", 500),
    new Product("Pen", 10),
    new Product("Laptop", 1000)
];

const filtered = products.filter(p => p.price > 100);
// console.log(filtered);

//Bai9

//Bai10
const account = new Account("Vinh", "111", 111)
console.log(account);

//Bai11



