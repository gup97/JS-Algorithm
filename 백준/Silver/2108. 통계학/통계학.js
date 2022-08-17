const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let num = input.sort((a, b) => a - b);

let mode = [];
num.forEach((v) => (mode[v] = mode[v] + 1 || 1));
const max = Object.entries(mode).reduce(
    (acc, cur) => (acc < cur[1] ? cur[1] : acc),
    -Infinity
);
let modeList = Object.entries(mode)
    .filter((v) => v[1] === max)
    .sort((a, b) => a[0] - b[0]);
console.log(Math.round(num.reduce((a, b) => a + b) / N) + 0);
console.log(num[Math.floor(N / 2)]);
console.log(modeList.length < 2 ? modeList[0][0] : modeList[1][0]);
console.log(num[num.length - 1] - num[0]);
