const fs = require("fs");
const { CLIENT_RENEG_LIMIT } = require("tls");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

let output = "";
const outputTemplate = (A, B, C) => `w(${A}, ${B}, ${C}) = `;

const dp = Array.from(Array(21), () => Array.from(Array(21), () => Array(21)));
input.forEach((v) => {
    const [A, B, C] = v.split(" ").map(Number);
    output += outputTemplate(A, B, C) + w(A, B, C) + "\n";
    function w(a, b, c) {
        if (a <= 0 || b <= 0 || c <= 0) {
            return 1;
        }
        if (a > 20 || b > 20 || c > 20) {
            return w(20, 20, 20);
        }
        if (dp[a][b][c] !== undefined) return dp[a][b][c];
        if (a < b && b < c) {
            dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
        } else {
            dp[a][b][c] =
                w(a - 1, b, c) +
                w(a - 1, b - 1, c) +
                w(a - 1, b, c - 1) -
                w(a - 1, b - 1, c - 1);
        }
        return dp[a][b][c];
    }
});
console.log(output);
