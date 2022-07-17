const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [n, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const achieve = arr.split(" ").map(Number);
const max = Math.max(...achieve);
const achieveCustom = achieve.map((el) => (el / max) * 100);
console.log(achieveCustom.reduce((a, b) => a + b) / n);
