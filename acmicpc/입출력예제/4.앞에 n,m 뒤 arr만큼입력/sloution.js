const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

solution(N, M, arr);
function solution(N, M, arr = []) {
  console.log(arr.filter((el) => M > el).join(" "));
}
