const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = [];
input.forEach((v) => arr.push(v.split(" ").map(Number)));

let result = [0, 0, 0];
paper(0, 0, N);
function isPaper(x, y, n) {
    const flag = arr[x][y];
    for (let i = x; i < x + n; i++) {
        for (let j = y; j < y + n; j++) {
            if (arr[i][j] !== flag) return false;
        }
    }
    return flag;
}

function paper(w, h, N) {
    if (N < 1) return;

    const paperType = isPaper(w, h, N);
    if (paperType !== false) {
        result[paperType + 1]++;
    } else {
        const M = N / 3;
        const MM = M * 2;
        paper(w, h, M);
        paper(w, h + M, M);
        paper(w, h + MM, M);
        w = w + M;
        paper(w, h, M);
        paper(w, h + M, M);
        paper(w, h + MM, M);
        w = w + M;
        paper(w, h, M);
        paper(w, h + M, M);
        paper(w, h + MM, M);
    }
}

console.log(result.join("\n"));
