const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

let N = +fs.readFileSync(filePath).toString().trim();


let result = "";
for (let i = 2; i <= N; i++) {
  if (N % i === 0) {
    N = N / i;
    result += `${i}\n`;
    i = 1;
  }
}
console.log(result);
