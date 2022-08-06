const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [X, N, ...CASE] = fs.readFileSync(filePath).toString().trim().split("\n");

let sum = 0;
CASE.forEach((v) => {
    const [price, amount] = v.split(" ").map(Number);
    sum += price * amount;
});

Number(X) === sum ? console.log("Yes") : console.log("No");
