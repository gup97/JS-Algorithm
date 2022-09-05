const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, 김지민, 임한수] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const floor = (n) => Math.floor((n + 1) / 2);
let fst = 김지민;
let sec = 임한수;

let result = 0;
while (fst !== sec) {
    fst = floor(fst);
    sec = floor(sec);
    result++;
}
console.log(result);
