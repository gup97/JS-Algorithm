const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [T, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = "";
arr.forEach((el, idx) => {
  const [A, B] = el.split(" ").map(Number);
  result += `Case #${idx + 1}: ${A + B}\n`;
});
console.log(result);
