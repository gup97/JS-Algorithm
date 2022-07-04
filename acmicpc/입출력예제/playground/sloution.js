const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const N = input.splice(0, 1);
const arr = input.map((el) => el.replace("\r", ""));

console.log(arr);
