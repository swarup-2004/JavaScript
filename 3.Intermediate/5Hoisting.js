

// This will work due to hoisting
sayHello();
function sayHello() {
    console.log("Hello");
}

// hoised and initialized to the undefined
console.log(name);
var name = "Ram";

// hoiseted but not initialized until the variable is encountered
console.log(age);
let age = 25;