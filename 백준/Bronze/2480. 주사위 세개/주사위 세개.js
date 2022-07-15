const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [first, second, third] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const HUNDRED = 100;
const THOUSAND = 1000;
const TEN_THOUSAND = 10000;

if (first === second && second === third) {
  console.log(TEN_THOUSAND + first * THOUSAND);
} else if (first !== second && second !== third && first !== third) {
  console.log(Math.max(first, second, third) * HUNDRED);
} else {
  const SUM = first === second ? first : second === third ? second : first;
  console.log(THOUSAND + SUM * HUNDRED);
}
