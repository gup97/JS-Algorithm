const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [L, input] = fs.readFileSync(filePath).toString().trim().split(/\n/);
const PRIME = 31;
const M = 1234567891;

const customPox = (num, n) => {
  let sum = 1;
  for (i = 0; i < n; i++) {
    if (sum > M) sum %= M;
    sum = sum * num;
  }
  return sum;
};
console.log(
  input
    .split("")
    .map((letter, idx) => (letter.charCodeAt() - 96) * customPox(PRIME, idx))
    .reduce((a, b) => (a + b) % M)
);
