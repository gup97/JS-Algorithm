const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

solution(input);

function solution(word = [1, 2]) {
  console.log(word[0] / word[1]);
}
