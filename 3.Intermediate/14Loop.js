for (let i = 1; i <= 10; i++) {
    console.log(i * 2);
}


let i = 10;
do {
    console.log("hi");
    i--;
}while (i >= 0);


i = 7;

while (i >= 0) {
    console.log("while");
    i--;
}

let arr = [1, 2, 4, 5, 8];

arr.forEach((num) => console.log(num));


for (const n of arr) {
    console.log(n);
}

const obj = {
    first: "raj",
    last: "kaam"
}

for (const n in obj) {
    console.log(obj[n]);
}