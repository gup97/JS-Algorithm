const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = +fs.readFileSync(filePath).toString().trim();

(function sol(input) {
    let recursive = 0;
    let dp = 0;
    function fib(n) {
        if (n === 1 || n === 2) {
            recursive++;
            return 1;
        } else return fib(n - 1) + fib(n - 2);
    }
    function fibonacci(n) {
        let f = Array.from({ length: n + 1 });
        f[1] = f[2] = 1;
        for (let i = 3; i < f.length; i++) {
            dp++;
            f[i] = f[i - 1] + f[i - 2];
        }
        return f[n];
    }
    fib(input), fibonacci(input);
    console.log(recursive, dp);
})(input);
