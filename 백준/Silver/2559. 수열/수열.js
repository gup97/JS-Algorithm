const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const temperature = input[1].split(" ").map(Number);

const prefix = [];
for (let i = 0; i < temperature.length - K + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + K; j++) {
        sum += temperature[j];
    }
    prefix.push(sum);
}
console.log(Math.max(...prefix));
