const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const N = +fs.readFileSync(filePath).toString().trim();
let result = "";
[...Array(N)].forEach((_, idx) => (result += `${idx + 1}\n`));
console.log(result);
