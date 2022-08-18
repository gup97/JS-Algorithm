const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const numList = input.split(" ").map(Number);
const dp = Array(N);
dp[0] = numList[0];

for (let i = 1; i < numList.length; i++) {
    dp[i] = Math.max(numList[i], numList[i] + dp[i - 1]);
}
console.log(Math.max(...dp));
