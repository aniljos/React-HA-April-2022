console.log("in one.js")

//named export
export function add(x, y){
    console.log("one.js add")
}

//named export
export function multiply(x, y){
    console.log("one.js multiply")
}

const API_VERSION = "1.0";
class Test{

}

//default export
export default {
    API_VERSION, Test, add, multiply
};

