const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const N = +fs.readFileSync(filePath).toString().trim();

(function sol(N) {
    let result = "";
    let sum = 0;
    function hanoi(target, start, to, via) {
        if (target === 0) return;
        sum++;
        hanoi(target - 1, start, via, to);
        result += `${start} ${to}\n`;
        hanoi(target - 1, via, to, start);
    }
    hanoi(N, 1, 3, 2);

    console.log(sum);
    console.log(result);
})(N);
