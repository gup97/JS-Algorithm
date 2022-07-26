const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const n = +fs.readFileSync(filePath).toString().trim();

(function solution(n) {
    function decomposition(v) {
        return v
            .toString()
            .split("")
            .reduce((acc, cur) => +acc + +cur, 0);
    }
    let result = 0;
    for (let i = 0; i <= n; i++) {
        if (i + decomposition(i) === n) {
            result = i;
            break;
        }
    }
    console.log(result);
})(n);
