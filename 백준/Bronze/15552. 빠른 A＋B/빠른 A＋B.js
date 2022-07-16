const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [T, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = "";
for (const el of arr) {
  const [A, B] = el.split(" ").map(Number);
  result += `${A + B}\n`;
}
console.log(result);
