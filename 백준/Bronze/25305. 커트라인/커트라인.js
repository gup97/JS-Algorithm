const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const numList = input[1].split(" ").map(Number);

console.log(numList.sort((a, b) => b - a)[M - 1]);
