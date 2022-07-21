const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

let [A, B] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
let result = 0;
let min = +Infinity;
for (let i = A; i <= B; i++) {
  if (isPrime(i)) {
    result += +i;
    min = Math.min(min, i);
  }
}
result ? console.log(result + "\n" + min) : console.log(-1);
