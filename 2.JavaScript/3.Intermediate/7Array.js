let countries = ["India", "China", "Japan"];

let states = new Array("Maharastra", "Goa");

console.log(countries);
console.log(states[0]);


// Length of array
console.log(states.length);

// Assignment in arrays
states[0] = "Punjab";
console.log(states);


// Array can have elements of multiple datatypes
let user = ["ram", 20];

// Remove from the last
user.pop();
console.log(user);

// Remove from first
user.shift();

// Add from front
user.unshift("new element");

// Getting index of the value;
user.indexOf("new element");


// converting strings to arrays
console.log(Array.from("Swarup"));