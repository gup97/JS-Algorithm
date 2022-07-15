const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const [A, B] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => el.trim());
console.log(A * B[2]);
console.log(A * B[1]);
console.log(A * B[0]);
console.log(A * B);
