function sum(a, b) {
    return a + b;
}

var arr = [5, 4];

console.log(sum(...arr)); // Takes a group and divide into the muliple values

function sum2(...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sum2(4, 5, 6, 9, 90));