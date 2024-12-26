const swarup = {
    firstName: "swarup",
    getInfo: function() {
        console.log(`My name is ${this.firstName}`);
    }
};


const dj = {
    firstName: "dj"
}

swarup.getInfo();

// Borrowing the method using the bind -> gives reference to the method and you have to manually call the reference to use method
var djInfo = swarup.getInfo.bind(dj);
djInfo();
