const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const LIST = input[1].split(" ").map(Number);
const prefix = [0];
LIST.forEach((v, i) => {
    prefix.push(v + prefix[i]);
});

let result = "";
input.slice(2).forEach((v) => {
    const [start, end] = v.split(" ").map(Number);
    result += `${prefix[end] - prefix[start - 1]}\n`;
});
console.log(result);
