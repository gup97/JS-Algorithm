const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [N, M] = input.map(Number);

console.log(N + M);
console.log(N - M);
console.log(N * M);
console.log(Math.floor(N / M));
console.log(N % M);
