let testArray = [2, 4, 6, 8, 5, 9, 8];


console.log(testArray.fill("h", 2, 4));

const result = testArray.filter((num) => num % 2 != 0);
console.log(result);