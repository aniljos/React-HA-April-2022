//Hoisting var x, var y;

console.log("Javascript scopes");

console.log("x: ", x); 
var x = 10; // global scope
console.log("x: ", x); 

var y; //global scope
console.log("y: ", y);

//console.log("z: ", z); Reference error


function foo(){
    //Hoisted : var msg

    console.log("in foo");
    var a = 50; // function scope
    if(x < 50){
        //var msg = "hello"; // function scope
        let msg = "hello";
        console.log("msg: ", msg);
    }
    
}
foo();




//last statement
console.log("App over");