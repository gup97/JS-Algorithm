const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const data = +fs.readFileSync(filePath).toString().trim().split("\n");

solution(data);
function solution(n) {
  const dp = new Array(n + 1);
  dp[1] = 0;
  dp[2] = 1;
  dp[3] = 1;
  for (let i = 4; i <= n; i++) {
    let min = dp[i - 1] + 1;
    if (i % 3 === 0) {
      min = Math.min(min,(dp[i] = dp[i / 3] + 1));
    }
    if (i % 2 === 0) {
      min = Math.min(min, dp[i / 2] + 1);
    }
    dp[i] = min;
  }
  console.log(dp[data]);
}
