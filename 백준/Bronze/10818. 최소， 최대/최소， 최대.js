const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const N = input.splice(0, 1);
const arr = input
  .toString()
  .split(" ")
  .map((el) => +el.replace("\r", ""));

let max = -Infinity;
let min = Infinity;
arr.forEach((el) => {
  if (el > max) max = el;
  if (el < min) min = el;
});
console.log(min, max);
