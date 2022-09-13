const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, M, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const list = input
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

let head = 0;
let tail = N - 1;
let result = 0;
while (head < tail) {
    if (list[head] + list[tail] === +M) result++;
    if (list[head + 1] + list[tail] <= +M) head++;
    else tail--;
}
console.log(result);
