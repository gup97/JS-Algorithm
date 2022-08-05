const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const list = input[1].split(" ").map(Number);
console.log(Math.min(...list) * Math.max(...list));
