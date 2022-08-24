const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const procession_A = input.slice(1, 1 + N).map((v) => v.split(" ").map(Number));
const procession_B = input.slice(1 + N, 1 + N + N).map((v) => v.split(" ").map(Number));

const procession_sum = procession_A.map((v, i) =>
    v.map((v2, i2) => v2 + procession_B[i][i2])
);
procession_sum.forEach((v) => console.log(v.join(" ")));
