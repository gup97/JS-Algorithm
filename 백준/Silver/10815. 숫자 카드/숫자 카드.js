const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

(function sol(input) {
    const 상근 = input[1].split(" ").map(Number);
    const haveCard = input[3].split(" ").map(Number);

    const cardMap = new Map();
    상근.forEach((v) => cardMap.set(v, 1));

    const result = haveCard.map((v) => (cardMap.has(v) ? 1 : 0)).join(" ");
    console.log(result);
})(input);
