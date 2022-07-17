const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const arr = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const set = new Set(arr.map((el) => el % 42));
console.log(set.size);
