let user = {
    firstName: "Swarup",
    lastName: "Pokharkar",
    role: "Admin",
    loginCount: 23,
    courseList: [],
    buyCourse: function (name) {
        this.courseList.push(name);
    }
};

console.table(user);
console.log(user);

user.buyCourse("Java");

console.table(user);