//https://blog.naver.com/occidere/220787441430
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const N = +fs.readFileSync(filePath).toString().trim();

const dp = Array(N + 1);
dp[1] = 1;
dp[2] = 2;
for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}
console.log(dp[N]);
