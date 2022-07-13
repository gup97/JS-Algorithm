const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = +fs.readFileSync(filePath).toString().trim();

const result =
  input >= 90 ? "A" : input >= 80 ? "B" : input >= 70 ? "C" : input >= 60 ? "D" : "F";
console.log(result);
