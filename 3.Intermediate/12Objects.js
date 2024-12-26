let user = {
    firstName: "Swarup",
    lastName: "Pokharkar",
    role: "Admin",
    loginCount: 23
};

// Accessing values
console.log(user.firstName);

console.log(user["lastName"]);


// Modifying values
user.loginCount = 34;


console.table(user);