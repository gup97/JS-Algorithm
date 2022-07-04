const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

solution(input);

function solution(word = [1, 2]) {
  const [min, max] = word.sort();

  const divisor = Array.from({ length: max }, (_, i) => i + 1)
    .filter((el) => !(min % el || max % el))
    .reduce((acc, cur) => (acc > cur ? acc : cur));
  const multiple = (max * min) / divisor;
  console.log(divisor);
  console.log(multiple);
}
