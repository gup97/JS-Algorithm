const fs = require("fs");
const filePath = "/dev/stdin";

const [input, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\n/)
  .map(Number);

console.log(arr.sort((a, b) => a - b).join("\n"));
