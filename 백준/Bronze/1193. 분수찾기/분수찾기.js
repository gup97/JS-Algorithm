const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const N = +fs.readFileSync(filePath).toString().trim();

seq(N);
function seq(n) {
  let num = [];
  let result = 0;
  let count = 0;
  while (result < n) {
    count++;
    result += count;
    num.push(result);
  }
  const temp = num[count - 1] - N + 1;
  count++;
  count % 2
    ? console.log(`${count - temp}/${temp}`)
    : console.log(`${temp}/${count - temp}`);
}
