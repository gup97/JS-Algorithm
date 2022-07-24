const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = +fs.readFileSync(filePath).toString().trim();

const dp = Array(input + 1).fill(0);
dp.forEach((_, i) => {
  if (i === 0) dp[i] = 0;
  else if(i===1)dp[i] = 1
  else {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
});
console.log(dp[input]);