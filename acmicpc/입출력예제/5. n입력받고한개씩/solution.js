const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const N = input[0].split(" ").map(Number);
const arr = input.splice(1).map(Number);

solution(arr);
function solution(arr = []) {
  const stack = [0];
  for (const el of arr) {
    if (el === 0) stack.pop();
    else stack.push(el);
  }
  console.log(stack.reduce((a, b) => a + b));
}
