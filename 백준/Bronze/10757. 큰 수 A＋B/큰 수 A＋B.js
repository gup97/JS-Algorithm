const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

let [A, B] = fs.readFileSync(filePath).toString().trim().split(" ");

let size = Math.max(A.length, B.length);
const result = Array(size + 1).fill(0);
A = A.split("").reverse();
B = B.split("").reverse();
for (let i = 0; i < size; i++) {
  result[i] += A[i] == null || B[i] == null ? +A[i] || +B[i] : +A[i] + +B[i];
  if (result[i] >= 10) {
    result[i] -= 10;
    result[i + 1] = +result[i + 1] + 1;
  }
}

if (result[result.length - 1] === 0) result.pop();
console.log(result.reverse().join(""));
