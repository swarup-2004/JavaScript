var myMap = new Map();


myMap.set(0, "Uno");
myMap.set(1, "dos");
myMap.set(2, "tros");
myMap.set(3, "pos");

console.log(myMap);

for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

myMap.forEach((value, key) => console.log(`${key}: ${value}`));

