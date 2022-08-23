const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const attendance = Array(31).fill(0);
let result = "";
input.forEach((v) => attendance[v]++);

for (let i = 1; i <= 30; i++) {
    if (attendance[i] !== 1) result += i + "\n";
}
console.log(result);
