const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [input1, input2] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S] = input1.split(" ").map(Number);

function sol() {
    const numList = new Map();
    const list = new Array(1002).fill(0);
    if (S !== 0) {
        const nums = input2.split(" ").map(Number);
        for (const n of nums) list[n] = 1;
    }
    let result = Infinity;
    for (let i = 1; i <= 1000; i++) {
        if (list[i]) continue;
        for (let j = i; j <= 1000; j++) {
            if (list[j]) continue;
            for (let k = j; k <= 1001; k++) {
                if (list[k]) continue;
                const sum = Math.abs(N - i * j * k);
                result = Math.min(result, sum);
            }
        }
    }
    return result;
}
console.log(sol());
