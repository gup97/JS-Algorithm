const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const xArray = {};
const yArray = {};

input.forEach((v) => {
    const [x, y] = v.split(" ").map(Number);
    xArray[x] = xArray[x] + 1 || 1;
    yArray[y] = yArray[y] + 1 || 1;
});

let result = [];
for (const [k, v] of Object.entries(xArray)) {
    if (v % 2 === 1) {
        result.push(k);
    }
}
for (const [k, v] of Object.entries(yArray)) {
    if (v % 2 === 1) {
        result.push(k);
    }
}
console.log(result.join(" "));
