/* Convert a traditional function expression to an arrow function.*/


// Traditional Function Expression:
let traditionalFnc = function (val1: number, val2: number) {
    return val1 + val2;

}

//Arrow Function:

let arrowFunction = (val3:number , val4: number) => val3 + val4;

console.log(traditionalFnc(3,5));
console.log(arrowFunction(3,5));


