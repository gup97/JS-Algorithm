const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const coin = input.slice(1).map(Number);

let sum = 0;
let penny = k;
for (let i = coin.length - 1; i >= 0; i--) {
    sum += Math.floor(penny / coin[i]);
    penny = penny % coin[i];
}
console.log(sum);
