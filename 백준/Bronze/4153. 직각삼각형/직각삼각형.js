const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const data = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) =>
    el
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  );
data.pop();

let result = [];
for (const tri of data) {
  if (tri[0] ** 2 + tri[1] ** 2 === tri[2] ** 2) result.push("right");
  else result.push("wrong");
}
console.log(result.join("\n"));
