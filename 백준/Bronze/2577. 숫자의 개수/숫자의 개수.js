const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [A, B, C] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const calMultiplyABC = A * B * C;
const result = new Array(10).fill(0);
calMultiplyABC
  .toString()
  .split("")
  .forEach((el) => {
    result[el] += 1;
  });
console.log(result.join("\n"));
