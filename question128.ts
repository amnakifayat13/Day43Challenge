/* Create an arrow function that takes multiple parameters and returns the product of all parameters.*/

let multipleParameters = (...numbers: number[]) =>
    numbers.reduce((total, number)=> total* number,1)
 console.log(multipleParameters(2,4,5,6));
 
