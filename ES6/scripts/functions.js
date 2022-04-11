// function statement
// 2 implicit args : this & arguments 
function sum(x, y){
    console.log("in sum", this, arguments);
}

// overrides the sum
// function sum(){
//     console.log("in sum no args");
// }

//sum(2, 3);
//sum();
//sum(2,3,4,5);

//function expression
// 2 implicit args
var add = function(x, y){
    return x + y;
}
console.log("add", add(2,3));


//Arrow Functions(ES6)
// No implicits args
var calc = (x, y)=>{
    return x + y;
}
console.log("calc", calc(2,3));

calc = (x, y) => x * y;
console.log("calc", calc(2,3));

var squareIt = x => x * x;
console.log("squareIt", squareIt(18));

var obj = {
    id: 10,
    print: function(){
        console.log("ID: ", this.id);
        var _this = this

        setTimeout(function(){
            //var a = 300;
            
            console.log("ID after 2sec: ", _this.id);
        }, 2000);

        setTimeout(()=>{
            console.log("ID after 2sec: ", this.id);
        }, 2000);
    }
}
obj.print();

var emp = {
    id: 200
}
//emp.print(); Error
const empPrint = obj.print.bind(emp);
empPrint();





