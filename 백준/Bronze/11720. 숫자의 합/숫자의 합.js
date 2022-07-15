const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(
  input[1]
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur)
);
