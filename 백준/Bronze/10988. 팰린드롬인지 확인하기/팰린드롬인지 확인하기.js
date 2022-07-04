const fs = require("fs");
const filePath = "/dev/stdin" ;
// 제출시       
// 테스트시     `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim();

console.log(solution(input));

function solution(word = "string") {
  const reverseWord = word.split("").reverse().join("");
  return word === reverseWord ? 1 : 0;
}
