const arr = [1, 2, 3 , 4];

// Finding sum of all elements

const ans1 = arr.reduce(function(acc, curr) {
    return acc + curr;
}, 0);

// Finding the largest element

const ans2 = arr.reduce((acc, curr) => Math.max(curr, acc), -Infinity);

console.log(ans1);
console.log(ans2);