const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const data = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = data[0].split(" ");
const pokemon = data.slice(1, +N + 1).map((el) => el.replace("\r", ""));
const question = data.slice(+N + 1).map((el) => el.replace("\r", ""));
const illustrated = [0];
const illustrated_reverse = [0];

pokemon.forEach((poke, idx) => {
  illustrated.push(poke);
  illustrated_reverse[poke] = idx + 1;
});
let result = "";
question.forEach((q) => {
  if (isNaN(Number(q))) {
    result += `${illustrated_reverse[q]}\n`;
  } else result += `${illustrated[q]}\n`;
});
console.log(result);
