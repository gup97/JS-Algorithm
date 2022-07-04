const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const N = input.splice(0, 1);
const arr = input.map((el) => el.replace("\r", ""));

arr.forEach((el) => {
  console.log(solution(el));
});

function solution(ox = []) {
  const plus = (n) => {
    return Array.from({ length: n }, (_, i) => i + 1).reduce((a, c) => a + c);
  };
  return ox
    .split("X")
    .filter((el) => el !== "")
    .reduce((acc, cur) => acc + plus(cur.length), 0);
}
