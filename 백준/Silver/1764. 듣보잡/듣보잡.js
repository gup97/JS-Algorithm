const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.split(" ").map(Number);
const people = arr.map((el) => el.replace("\r", ""));

const map = new Map();
for (let i = 0; i < N + M; i++) {
  if (i < N) map.set(people[i], map.get(people[i]) + 1 || 0);
  else map.set(people[i], map.get(people[i]) + 1 || 0);
}

const result = [];
for (const [k, v] of map) {
  if (v > 0) result.push(k);
}
console.log(result.length);
console.log(result.sort().join("\n"));
