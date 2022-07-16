const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const T = +fs.readFileSync(filePath).toString().trim();

let result = "";
for (let i = 0; i < T; i++) {
  let line = "";
  for (let j = 0; j < T; j++) {
    if (j >= T - 1 - i) line += "*";
    else line += " ";
  }
  result += `${line}\n`;
}
console.log(result);
