const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const data = fs.readFileSync(filePath).toString().trim().split("\n");
let str = "",
  n,
  m,
  arr2 = [];
const arr = [];
const first = data[0].split(" ");
n = parseInt(first[0]);
m = parseInt(first[1]);
for (let i = 1; i <= n; i++) {
  arr.push(data[i].split(" "));
  arr2.push(new Array(m));
}
let sum = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    sum += parseInt(arr[i][j]);
    arr2[i][j] = sum;
  }
}
console.log(n, m);
console.log(str, arr, arr2);
