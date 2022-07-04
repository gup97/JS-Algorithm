const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const N = input.splice(0, 1);
const arr = input.toString().split(" ").map(Number);

const prime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
const result = arr.reduce((acc, cur) => {
  return prime(cur) ? acc + 1 : acc;
}, 0);

console.log(result);
