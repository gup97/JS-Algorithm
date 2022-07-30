const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

(function sol(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const S = input.slice(1, N + 1).map((v) => v.replace("\r", ""));
    const checkS = input.slice(N + 1).map((v) => v.replace("\r", ""));

    const map = new Map();
    S.forEach((v) => map.set(v, map.get(v) + 1 || 1));
    const result = checkS.reduce((acc, cur) => acc + (map.has(cur) ? 1 : 0), 0);
    console.log(result);
})(input);
