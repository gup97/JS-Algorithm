const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const getCombinations = function (arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
};
console.log(
  getCombinations(arr, 3)
    .map((num) => num.reduce((a, b) => a + b))
    .filter((num) => num <= M)
    .reduce((a, b) => (a > b ? a : b))
);
