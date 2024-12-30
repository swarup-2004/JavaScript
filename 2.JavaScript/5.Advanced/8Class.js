class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    #courseList = [];
    
    getInfo() {
        console.log(`My name is ${this.name} and my email is ${this.email}`);
    }

    getCourseList() {
        return this.#courseList;
    }

}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
}

module.exports = User;

let swarup = new User("swarup", "123");

let admin = new Admin("ram", "123");

admin.getInfo();

console.log(swarup.getCourseList());