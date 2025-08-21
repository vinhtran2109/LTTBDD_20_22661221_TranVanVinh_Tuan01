import { Person } from "./Bai1";
import { Student } from "./Bai2";
import { Car } from "./Bai3";
import { Rectangle } from "./Bai4";
import { BankAccount } from "./Bai5";
import { Book } from "./Bai6";
import { User } from "./Bai7";
import { Product } from "./Bai8";
import { Account } from "./Bai10";
import { Bird, Fish } from "./Bai12";
import { Square, Circle } from "./Bai13";
import { Manager, Developer } from "./Bai14";
import { Library } from "./Bai15";
import { Box } from "./Bai16";
import { Logger } from "./Bai17";
import { MathUtil } from "./Bai18";
import { Animal as Animal19, Dog as Dog19, Cat as Cat19 } from "./Bai19";
import { Car as Car20, Bike } from "./Bai20";
import { Repository } from "./Bai21";
import { Stack } from "./Bai22";
import { CashPayment, CardPayment } from "./Bai23";
import { Fan, AirConditioner } from "./Bai24";
import { Shape as Shape25 } from "./Bai25";
import { Order } from "./Bai26";
import { Teacher } from "./Bai27";
import { Dog as Dog28, Cat as Cat28 } from "./Bai28";
import { Car as Car29, Robot } from "./Bai29";
import { School } from "./Bai30";
import { Dog as Dog11, Cat as Cat11 } from "./Bai11";
import { Dog as Dog9, Cat as Cat9 } from "./Bai9";

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
const dog9 = new Dog9("KiKi");
// dog9.sound();
const cat9 = new Cat9("MiMi");
// cat9.sound();

//Bai10
const account = new Account("Vinh", "111", 111)
// console.log(account);

//Bai11
const dog11 = new Dog11("KiKi");
// dog11.bark();
const cat11 = new Cat11("MiMi");
// cat11.meow();

//Bai12
const bird = new Bird();
// bird.fly();
const fish = new Fish();
// fish.swim();

//Bai13
const square = new Square(4);
// console.log("Square area:", square.area());
const circle = new Circle(3);
// console.log("Circle area:", circle.area());

//Bai14
const manager = new Manager("Nam");
// manager.manage();
const dev = new Developer("Vinh");
// dev.code();

//Bai15
const library = new Library();
library.addBook(new Book("Doraemon", "Fujiko", 1990));
// console.log(library.books);

//Bai16
const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Hello");
// console.log(numberBox.value, stringBox.value);

//Bai17
const logger = Logger.getInstance();
// logger.log("Hello Logger");

//Bai18
// console.log(MathUtil.add(1,2), MathUtil.subtract(5,3), MathUtil.multiply(2,3), MathUtil.divide(10,2));

//Bai19
const animals: Animal19[] = [new Dog19(), new Cat19(), new Animal19()];
// animals.forEach(a => a.makeSound());

//Bai20
const car20 = new Car20();
const bike = new Bike();
// car20.drive();
// bike.drive();

//Bai21
const repo = new Repository<number>();
repo.add(1);
repo.add(2);
// console.log(repo.getAll());

//Bai22
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.isEmpty());

//Bai23
const cash = new CashPayment();
// cash.pay(100);
const card = new CardPayment();
// card.pay(200);

//Bai24
const fan = new Fan();
// fan.turnOn();
const ac = new AirConditioner();
// ac.turnOn();

//Bai25
Shape25.describe();

//Bai26
const order = new Order();
order.addProduct(new Product("Book", 50));
order.addProduct(new Product("Pen", 10));
// console.log(order.totalPrice());

//Bai27
const teacher = new Teacher("Vinh", 35, "Math");
// teacher.introduce();

//Bai28
const dog28 = new Dog28();
// dog28.sound();
const cat28 = new Cat28();
// cat28.sound();

//Bai29
const car29 = new Car29();
const robot = new Robot();
// car29.move();
// robot.move();

//Bai30
const school = new School();
school.students.push(new Student("Nam", 18, 10));
school.teachers.push(teacher);
// school.displayInfo();



