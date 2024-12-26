let title = document.querySelector(".title");
console.log(title);

let message = document.querySelector(".message");

let countObject = document.querySelector(".counter");
let count = 1;
setInterval(() => {
    if (count < 1000) {
        count++;
        countObject.innerText = count;
    }
}, 1);


title.addEventListener("mouseenter", () => {
    title.innerText = "Welcome";
})

