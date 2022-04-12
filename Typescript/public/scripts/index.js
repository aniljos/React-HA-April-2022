console.log("Hello Typescript");
var x; // inferred to any
x = 10;
console.log("x", x);
x = "Anil";
console.log("x", x);
var y = 20; // inferred to number
//y = "abc"; // compiler error: static type checking
console.log("y", y);
var z; // type annotation
z = "Hello";
//z = 300; // compiler error
console.log("z", z);
