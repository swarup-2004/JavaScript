let name = "Swarup";

console.log("Global " + name);

function sayName() {
    var name = "Ram";
    console.log("Execution " + name);
}

sayName();