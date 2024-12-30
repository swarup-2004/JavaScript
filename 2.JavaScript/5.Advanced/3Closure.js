function doAddition(x) {
    return function(y) {
        return x + y;
    };
};

var add5 = doAddition(4);
console.log(add5(3));

console.log(doAddition(5)(5)); // Curring


