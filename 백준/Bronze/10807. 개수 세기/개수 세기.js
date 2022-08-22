const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const list = input[1].split(" ").map(Number);
const target = +input[2];
console.log(list.reduce((acc, cur) => (cur === target ? acc + 1 : acc), 0));
