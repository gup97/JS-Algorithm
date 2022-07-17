const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const arr = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
console.log(arr.map((el) => Math.pow(el, 2)).reduce((a, b) => a + b) % 10);
