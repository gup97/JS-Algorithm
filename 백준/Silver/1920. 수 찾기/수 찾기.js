const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const data = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => el.replace("\r", ""));

const N = data.shift();
const arrN = data.shift().split(" ").map(Number);
const M = data.shift();
const arrM = data.shift().split(" ").map(Number);

const map = new Map();
arrN.forEach((el) => {
  map.set(el, 1);
});
const result = [];
arrM.forEach((el) => {
  map.has(el) ? result.push(1) : result.push(0);
});
console.log(result.join("\n"));
