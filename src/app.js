'use strict';

class Test {
    constructor(){
        console.log(arguments)
    }
}

let test = new Test(1,2,3);



let b = {};
Object.assign(b, test);