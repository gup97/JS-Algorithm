const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const N = +fs.readFileSync(filePath).toString().trim();

let test = N;
let result = 0;
while (test !== N || result === 0) {
  test = (test % 10) * 10 + ((Math.floor(test / 10) + (test % 10)) % 10);
  result++;
}
console.log(result);
