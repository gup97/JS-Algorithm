const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const [A, B] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
let result = "";
for (let i = A; i <= B; i++) {
  if (isPrime(i)) {
    result += `${i}\n`;
  }
}
console.log(result);
