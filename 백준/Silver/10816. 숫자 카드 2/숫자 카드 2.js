const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const data = fs.readFileSync(filePath).toString().trim().split("\n");
const map = new Map();
const arr = data[1]
  .split(" ")
  .map(Number)
  .map((el) => map.set(el, map.get(el) + 1 || 1));

let result = "";
for (const num of data[3].split(" ").map(Number)) {
  result += map.has(num) ? map.get(num) + " " : "0 ";
}
console.log(result);
