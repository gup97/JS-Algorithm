const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("");
const alphabet = Array(26).fill(-1);
input.forEach((el, idx) => {
  if (alphabet[el.charCodeAt() - 97] === -1) alphabet[el.charCodeAt() - 97] = idx;
});
console.log(alphabet.join(" "));
