const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = +fs.readFileSync(filePath).toString().trim();

const card = Array.from({ length: input }, (_, i) => i + 1);

let result = "";
while (card[0] !== undefined) {
    result += card.shift() + " ";
    card.push(card.shift());
}
console.log(result);
