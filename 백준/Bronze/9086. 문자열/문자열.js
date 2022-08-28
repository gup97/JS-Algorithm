const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const list = input.map((v) => v.replace("\r", ""));
let result = "";

list.forEach((v) => {
    result += v[0] + v[v.length - 1] + "\n";
});
console.log(result);
