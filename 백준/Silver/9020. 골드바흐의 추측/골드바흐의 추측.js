const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
input.shift();

const primeNumArr = Array.from({ length: 10001 }, (_, i) => i).fill(true);
for (let i = 2; i < primeNumArr.length; i++) {
  if (primeNumArr[i] === true) {
    for (let j = i + i; j < primeNumArr.length; j += i) {
      primeNumArr[j] = false;
    }
  }
}
let result = "";
for (const T of input) {
  for (let i = Math.floor(T / 2); i > 1; i--) {
    if (primeNumArr[i] && primeNumArr[T - i]) {
      result += `${i} ${T - i}\n`;
      break;
    }
  }
}
console.log(result);
