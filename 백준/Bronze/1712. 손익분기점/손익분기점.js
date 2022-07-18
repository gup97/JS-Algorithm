const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [A, B, C] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
//A+B*n

B >= C ? console.log(-1) : console.log(Math.floor(A / (C - B)) + 1);
