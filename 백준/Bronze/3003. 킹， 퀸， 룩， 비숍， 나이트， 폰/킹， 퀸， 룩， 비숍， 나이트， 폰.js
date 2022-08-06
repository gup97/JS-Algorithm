const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const chess = [1, 1, 2, 2, 2, 8];
let result = "";
input.forEach((_, i) => {
    result += chess[i] - input[i] + " ";
});
console.log(result);
