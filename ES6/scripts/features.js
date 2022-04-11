//spread operator(any iterable) = Array, Object, Map

const numbers = [1,2,3,4,5,6];
console.log("numbers", numbers);

const copy_of_numbers = [...numbers];
console.log("copy_of_numbers", copy_of_numbers);

numbers.push(7);
console.log("numbers", numbers);
console.log("copy_of_numbers", copy_of_numbers);

// const obj1 = {a: 1};
// const obj2 = {a: 2};

// const objs = [obj1, obj2];

// const copy_of_objs = [...objs];
// copy_of_numbers[1] = {...obj2};

//Destructuring(iterable)

const names = ["Anil", "Amol", "Tapan"];

//var name1 = names[0]; var name2 = names[1];

const [name1, name2, name3] = names; //Destructuring
console.log(name1, name2, name3);

const product = {
    name: "IPhone", price: 60000, desc: "Smart Phone"
};

//var name = product.name; var price = product.price;

const {desc, name, price} = product; //Destructuring

console.log(name, price, desc);

//String Template Literals
//var message = "The product" +  name  + "is priced at price ans is a desc";
var message = `The product ${name} is priced at ${price} ans is a ${desc}`; //String Template Literals
console.log(message);


