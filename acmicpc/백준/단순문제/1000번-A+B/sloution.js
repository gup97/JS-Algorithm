const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
// let input = fs.readFileSync(filePath).toString().split(" ");
var input = fs.readFileSync(`${__dirname}/input.txt`).toString().split(" ");
solution(input);

function solution(input) {
  console.log(parseint(input[0] + input[1]));
}
