let User = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};


var obj1 = new User("ram", "zha");

console.log(obj1);


var obj2 = new User("ajay", "kahan");

console.log(obj2);



User.prototype.getFirstName = function() {
    console.log(`Your first name is : ${this.firstName}`);
};

obj1.getFirstName();
obj2.getFirstName();

