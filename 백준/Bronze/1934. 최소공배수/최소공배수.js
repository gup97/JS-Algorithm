const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [T, ...CASE] = fs.readFileSync(filePath).toString().trim().split("\n");

CASE.forEach((v) => {
    const [A, B] = v.split(" ").map(Number);

    console.log((A * B) / gcd(A, B));
    function gcd(a, b) {
        let r;
        while (b != 0) {
            r = a % b;
            [a, b] = [b, r];
        }
        return a;
    }
});
