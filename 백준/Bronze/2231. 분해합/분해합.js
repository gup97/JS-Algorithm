const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const n = +fs.readFileSync(filePath).toString().trim();

(function solution(n) {
    function elementSum(v) {
        return v
            .toString()
            .split("")
            .reduce((a, b) => +a + +b, 0);
    }
    const decomposition = Array.from({ length: n + 1 }, (_, i) => i).map(
        (v) => v + elementSum(v)
    );
    decomposition.includes(n)
        ? console.log(decomposition.indexOf(n))
        : console.log(0);
})(n);
