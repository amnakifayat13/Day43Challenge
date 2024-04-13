/* Convert a traditional function expression to an arrow function.*/
// Traditional Function Expression:
var traditionalFnc = function (val1, val2) {
    return val1 + val2;
};
//Arrow Function:
var arrowFunction = function (val3, val4) { return val3 + val4; };
console.log(traditionalFnc(3, 5));
console.log(arrowFunction(3, 5));
