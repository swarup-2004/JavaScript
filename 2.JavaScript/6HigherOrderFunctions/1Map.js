// Higher order functions take other functions as an argument or 
// return a function as a result

const arr = [1, 2, 3 , 4];

// Finding square of every element
const output = arr.map((num) => num * num);

console.log(output);

// Difference between map and the forEach doesn't return anything just apply function to each element
arr.forEach((num) => console.log(num * num));
