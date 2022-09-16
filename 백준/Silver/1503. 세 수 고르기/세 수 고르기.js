const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [input1, input2] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S] = input1.split(" ").map(Number);

function sol() {
    const numList = new Map();
    if (S !== 0) {
        const list = input2.split(" ").map(Number);
        list.forEach((v) => numList.set(v, true));
    }
    let result = Infinity;
    for (let i = 1; i <= 1000; i++) {
        if (numList.has(i)) continue;
        for (let j = i; j <= 1000; j++) {
            if (numList.has(j)) continue;

            for (let k = j; k <= 1001; k++) {
                if (numList.has(k)) continue;

                const sum = Math.abs(N - i * j * k);
                result = Math.min(result, sum);
            }
        }
    }
    return result;
}
console.log(sol());
