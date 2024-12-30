let isEven = (num) => {
    // if (num % 2 == 0) {
    //     return true;
    // }
    // return false;
    return num % 2 == 0;
}

var result = [2, 3, 6, 8].every(isEven);
console.log(result);

