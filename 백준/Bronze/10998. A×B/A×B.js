const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const [A, B] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

console.log(A * B);
