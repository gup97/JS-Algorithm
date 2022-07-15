const fs = require("fs");
const { brotliDecompress } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const fibo = (n) => {
  const arr = [];
  arr[0] = [1, 0];
  arr[1] = [0, 1];
  arr[2] = [1, 1];
  for (let i = 3; i <= n; i++) {
    arr[i] = [arr[i - 1][0] + arr[i - 2][0], arr[i - 1][1] + arr[i - 2][1]];
  }
  return arr[n];
};

let result = "";
input.forEach((el) => {
  result += `${fibo(el).toString().replace(",", " ")}\n`;
});
console.log(result);
