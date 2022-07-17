const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = +fs.readFileSync(filePath).toString().trim();

let result = 0;
for (let i = 1; i <= input; i++) {
  if (hanNum(i)) result++;
}
console.log(result);

function hanNum(n) {
  const splitArray = n.toString().split("").map(Number);
  let stand = 0;
  for (let i = 1; i < splitArray.length; i++) {
    if (i === 1) stand = splitArray[0] - splitArray[i];
    else if (splitArray[i - 1] - splitArray[i] !== stand) return false;
  }
  return true;
}
