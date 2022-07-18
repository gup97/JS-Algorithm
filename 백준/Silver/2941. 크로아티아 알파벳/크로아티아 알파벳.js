const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const arr = fs.readFileSync(filePath).toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let result = arr;
croatia.forEach((el) => {
  const reg = new RegExp(el, "g");
  result = result.replace(reg, "_");
});

console.log(result.split("").length);
