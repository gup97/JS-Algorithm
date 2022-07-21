const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
input.pop();

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function isPrimeNum(A, B) {
  let sum = 0;
  for (let i = A; i <= B; i++) {
    if (isPrime(i)) {
      sum++;
    }
  }
  return sum;
}
let result = "";
for (const T of input) {
  result += isPrimeNum(T + 1, 2 * T) + "\n";
}

console.log(result);
