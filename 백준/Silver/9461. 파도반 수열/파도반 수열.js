const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const padovan = Array(10);
padovan[0] = padovan[1] = padovan[2] = 1;
for (let i = 3; i <= 101; i++) {
    padovan[i] = padovan[i - 2] + padovan[i - 3];
}

let result = "";
input.forEach((v) => {
    result += padovan[v - 1] + "\n";
});
console.log(result);
