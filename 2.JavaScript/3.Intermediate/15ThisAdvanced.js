let user = {
    firstName: "Swarup",
    lastName: "Pokharkar",
    role: "Admin",
    loginCount: 23,
    courseList: [],
    buyCourse: function (name) {
        console.log(this);
        let sayHello = function() {
            console.log("Regular Function call");
            console.log(this);
        }
        sayHello();

        this.courseList.push(name);
    }

    
};

// Function call through an object
user.buyCourse("Java");

console.table(user);