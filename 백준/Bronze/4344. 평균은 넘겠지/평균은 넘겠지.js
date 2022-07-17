const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [C, ...data] = fs.readFileSync(filePath).toString().trim().split("\n");

data.forEach((el) => {
  const [N, ...point] = el.split(" ").map(Number);
  const average = point.reduce((a, b) => a + b) / N;
  const result = (point.filter((el) => el > average).length / point.length) * 100;
  console.log(result.toFixed(3) + "%");
});
