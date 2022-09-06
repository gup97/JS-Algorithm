const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = +fs.readFileSync(filePath).toString().trim().split(" ");

const binary = input.toString(2);
const result = binary.split("").reduce((acc, cur) => (cur === "1" ? acc + 1 : acc), 0);
console.log(result);
