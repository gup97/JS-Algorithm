const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const n = +fs.readFileSync(filePath).toString().trim();

console.log(Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b));
