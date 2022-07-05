const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => el.replace("\r", ""));

const result = [];
for (const text of input) {
  if (text === "0") break;
  const _text = text.split("");
  let flag = "yes";
  while (_text.length > 1) {
    if (_text.pop() !== _text.shift()) flag = "no";
  }
  result.push(flag);
}

console.log(result.join("\n"));
