const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim();

console.log(solution(input));

function solution(word = "string") {
  const reverseWord = word.split("").reverse().join("");
  return word === reverseWord ? 1 : 0;
}
