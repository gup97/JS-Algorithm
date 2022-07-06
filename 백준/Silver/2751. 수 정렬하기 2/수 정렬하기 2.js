const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const [input, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\n/);
console.log(
  arr
    .map(Number)
    .sort((a, b) => a - b)
    .join("\n")
);
