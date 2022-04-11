

console.log("in two.js");



//import {add, multiply} from './one.js'
// export function calculate(x, y){

//     console.log("in two.js calculate");
//     add(x, y);
//     multiply(x, y);
// }


import * as one from './one.js' // named import
import One from './one.js'; //default import
export function calculate(x, y){

    console.log("in two.js calculate");
    one.add(x, y);
    one.multiply(x, y);

    console.log("version: ", One.API_VERSION);
    One.add();
}

function Test(){
    console.log("in test...");
}

export default Test;