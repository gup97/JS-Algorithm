const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const PEOPLE = Array.from({ length: N }, (_, i) => i + 1)
  .toString()
  .split(",");
const PEOPLE_ALIVE = [];
const result = [];
let target = 0;
let stack = 0;
while (result.length < N) {
  if (PEOPLE_ALIVE[PEOPLE[target]] !== true) stack++;
  if (stack >= M) {
    result.push(PEOPLE[target]);
    PEOPLE_ALIVE[PEOPLE[target]] = true;
    stack = 0;
  }
  target = (target + 1) % N;
}
console.log(`<${result.join(", ")}>`);
