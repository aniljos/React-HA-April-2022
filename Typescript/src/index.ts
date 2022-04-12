import {Car, Vehicle} from './vehicle.js'
import Employee from './employee.js';
import { isEmptyBindingElement } from '../node_modules/typescript/lib/typescript.js';


console.log("Hello Typescript");

var x; // inferred to any
x = 10;
console.log("x", x);
x = "Anil";
console.log("x", x);

var y = 20; // inferred to number
//y = "abc"; // compiler error: static type checking
console.log("y", y);

var z : string; // type annotation
z = "Hello";
//z = 300; // compiler error
console.log("z", z);

var emp : {id: number, name: string, location: string};

emp = {id: 1, name: "Anil", location: "Mumbai"};
console.log("emp", emp);

var person = {id: 100, name: "Anil"}; //infers to an object 
//person = "";

var foo: any = function(){}

let car1: Vehicle = new Car();

car1.name = "Audi"; car1.speed=200; car1.gears=7;
console.log("car1", car1);
car1.applyBrakes(100);
console.log("car1", car1);


let car2 = new Car("BMW", 240, 7);
console.log("car2", car2);

var emp1 = new Employee(1, "Anil", 30000);

console.log("emp1", emp1);
emp1.location = "Mumbai";

console.log("emp1 location", emp1.location);




