const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);

solution(input);

function solution(input) {
  console.log(input[0] + input[1]);
}
