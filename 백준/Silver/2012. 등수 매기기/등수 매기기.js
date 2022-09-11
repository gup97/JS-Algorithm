const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function discontent(rank, n) {
    return Math.abs(rank - n);
}

const rank = input
    .sort((a, b) => a - b)
    .map((v, i) => discontent(i + 1, v))
    .reduce((a, b) => a + b);
console.log(rank);
