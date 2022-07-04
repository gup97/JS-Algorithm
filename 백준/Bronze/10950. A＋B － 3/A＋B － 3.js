const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const N = +input.splice(0, 1);
const arr = input.map((el) => el.split(" ").map(Number));

arr.forEach((el) => {
  console.log(el[0] + el[1]);
});
